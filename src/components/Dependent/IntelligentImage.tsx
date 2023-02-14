/**
 * Imports
 * @param React: The main React implementation to do functions such as @arg React.useState or @arg React.useEffect
 * @param { Image }: The actual ReactNative Image Component which is used for this implementation
 * @param { getByProps }: Allows to get a module by its properties
 * @param manifest: The main object containing important information about the plugin such as name, version, etc
 */
import { React } from "enmity/metro/common"
import { Image } from "enmity/components"
import { getByProps } from "enmity/metro"
import manifest from "../../../manifest.json"

/**
 * @param windowWidth: The full window width. 
 * This is collected by firstly getting the full ReactNative object, and then getting the window's width with the @var Dimensions.get property defined on it.
 */
const windowWidth = getByProps("View", "Text")?.Dimensions?.get("window").width

/**
 * Main @IntelligentImage implementation. Allows to render an image without setting a @fixed height.
 * The @height is calculated by taking into account the image's @aspectRatio and the @width provided
 * @param props: This contains the style of the image and the source (image that should be rendered)
        * @param style.width: This is a required property for the image to work.
        * @param style.maxWidth?: This is an optional property which is taken into account and is defined as a property which may or may not exist  
 * @returns TSX Component
 */
export default ({ style, source }: { style: { width: string | number, maxWidth?: string | number }, source: string }) => {
    /**
     * @param {Getter, Setter} dimensions: The dimensions for the image in pixels
     * @param {Getter, Setter} normalizedWidth: The width of the image in a format that can be easily used to render a image without any complications at style setup time
     */
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
    const [normalizedWidth, setNormalizedWidth] = React.useState(0)
    
    /**
     * Formats and calculates a given @width or @maxWidth and returns a @logical pixel value that can be used to render the image safely.
     * This function supports both @logical pixel and @percentage values for both of the @widths when ran.
     * @width must exist, @maxWidth may exist and is taken into account if it does exist
     * @returns {number} NormalizedColor
     */
    const calculateNormalizedWidth = (): number => {
        /**
         * Takes in a generic @width which is a string or a number. This can either be the @width or @maxWidth in this case.
         * Assumes that the @width is a @percentage value if it is a string.
         * If it is a string, then it calculates a reverse @percentage based on the @windowWidth to calculate a @logical pixel count.
         * Otherwise, it just returns the width, assuming it is a valid number value, as the function signature will only allow for strings or numbers.
         * @param {string | number} width: A generic @width that can be compared and used to render images.
         * @returns {number} ParsedColor
         */
        const getParsedWidth = (width: string | number): number => typeof width == "string"
            ? (parseInt(width.replace("%", "")) * windowWidth) / 100
            : width

        /**
         * Gets the @normalizedWidth of the regular width. This @width value must exist.
         */
        const normalizedWidth = getParsedWidth(style.width)

        /**
         * If there is no @maxWidth provided then the @normalizedWidth is instantly returned.
         */
        if (!style.maxWidth) return normalizedWidth;

        /**
         * Otherwise, a @normalizedMaxWidth is parsed. This @maxWidth value may not be defined.
         * If it has reached this line, then it definitely does exist.
         */
        const normalizedMaxWidth = getParsedWidth(style.maxWidth)

        /**
         * Compared the @normalizedWidth against the @normalizedMaxWidth
         * If the @normalizedWidth is larger than the @normalizedMaxWidth then that means that the cap has been reached and the @normalizedMaxWidth is returned.
         * Otherwise, the @normalizedWidth is returned as the cap has not been reached.
         */
        return normalizedWidth > normalizedMaxWidth
            ? normalizedMaxWidth
            : normalizedWidth
    }

    React.useEffect(() => {
        /**
         * Uses the @source to fetch and store through @state the dimensions in width and height.
         * Therefore, the @source must be defined.
         */
        Image.getSize(
            source, 
            (width, height) => {
                setDimensions({ width, height })
            },
            (error) => {
                console.error(`[${manifest.name}] ${error} when fetching ${source}`)
            }
        )

        /**
         * Sets the @state normalizedWidth to the result of @func calculateNormalizedWidth
         */
        setNormalizedWidth(calculateNormalizedWidth())
    }, []);

    return <Image
        style={[
            /**
             * Spreads the @style property if it is an array.
             * If it is not an array, that means the user has passed in an @object, so put that inside of an @anonymous array and spread that instead.
             */
            ...Array.isArray(style) ? style : [style], 
            { 
                /**
                 * Sets the height of the image dynamically based on the @normalizedWidth in @logical pixels constrained to the @aspectRatio of the image ( @height / @width )
                 * @param height: The height of the image.
                 */
                height: normalizedWidth * (dimensions.height / dimensions.width) 
            }
        ]}
        source={{
            /**
             * Finally, sets the @uri of the @image to the @source string provided.
             */
            uri: source
        }}
        /**
         * Sets @resizeMode to stretch so that the image will always fit in the container.
         */
        resizeMode={"stretch"}
    />
}