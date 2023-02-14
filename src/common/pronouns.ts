/**
 * @param PronounManager: The main object to handle the discord ids-pronouns map aswell as the queue and reference map of pronouns
 * Thank you to Pylix (492949202121261067 / pylixフユ#8636) for their @arg { Aliucord } PronounDB plugin.
 * Without it, it would've been significantly harder to figure out how to do this.
 */
export default {
    map: {} as { [key: string]: string },
    queue: [] as any[],
    fetching: false as boolean,
    referenceMap: {
        hh: "he/him",
        hi: "he/it",
        hs: "he/she",
        ht: "he/they",
        ih: "it/him",
        ii: "it/its",
        is: "it/she",
        it: "it/they",
        shh: "she/he",
        sh: "she/her",
        si: "she/it",
        st: "she/they",
        th: "they/he",
        ti: "they/it",
        ts: "they/she",
        tt: "they/them",
        any: "any",
        other: "other",
        ask: "ask",
        avoid: "avoid pronouns, use name",
        unspecified: "unspecified"
    } as Record<string, string>,

    /**
     * Fetches 49 unique @var { Discord } IDs' Pronouns from the PronounDB database at a time and set them to the map.
     * @returns {Promise<void>}
     */
    async updateQueuedPronouns(): Promise<void> {
        if (this.queue.length <= 0 || this.fetching) return;
        const ids = this.queue.splice(0, 49);

        /**
         * Gets a new id from the top of the @arg queue stack until you get one which is not in the @arg map already (so @arg unique and is actually worth fetching/hasn't been fetched yet)
         * @param id: The id of the user to fetch 
         * @returns {string} id/newId
         */
        const greedilyGetNewID = (id: string): string => {
            if (this.queue.length <= 0) return id;
            if (this.map[id]) return greedilyGetNewID(this.queue.shift())
            return id;
        }

        for (const id of ids) {
            if (this.map[id]) ids[id] = greedilyGetNewID(id)
        }

        this.fetching = true;

        const unfilteredPronounRes = await(
            await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${ids.join(",")}`, {
                method: "GET",
                headers: { "Accept": "application/json", "X-PronounDB-Source": "Enmity" }
            })
        ).json()

        const filteredPronounRes = Object.fromEntries(
            Object.entries(unfilteredPronounRes)
                .filter(([key, _]) => !isNaN(+key)));
                
        Object.assign(this.map, filteredPronounRes)

        this.fetching = false;
        if (this.queue.length > 0) this.updateQueuedPronouns();
    }
}