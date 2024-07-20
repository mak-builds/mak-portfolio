import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import BORDER_WIDTHS from "./additional/border-widths";
import BORDER_STYLES from "./additional/border-styles";
import FORMLABEL from "./component/formlabel.theme";
import LINE_HEIGHT from "./additional/line-heights";
import CHECKBOX from "./component/checkbox.theme";
import FONT_SIZES from "./additional/font-sizes";
import SLIDER from "./component/slider.theme";
import RADIO from "./component/radio.theme";
import TEXT from "./component/text.theme";
import CARD from "./component/card.theme";
import MENU from "./component/menu.theme";
import COLORS from "./additional/colors";
import SPACES from "./additional/spaces";
import RADII from "./additional/radii";
import SIZES from "./additional/sizes";
import TAG from "./component/tag.theme";
import GLOBAL from "./additional/global";
import TABS from "./component/tabs.theme";
import LINK from "./component/link.theme";
import LIST from "./component/list.theme";
import INPUT from "./component/input.theme";
import TABLE from "./component/table.theme";
import BUTTON from "./component/button.theme";
import SELECT from "./component/select.theme";
import TOOLTIP from "./component/tooltip.theme";
import DIVIDER from "./component/divider.theme";
import BREAKPOINTS from "./additional/breakpoints";
import ACCORDIAN from "./component/accordian.theme";
import FORMERROR from "./component/formerror.theme";
import BREADCRUMB from "./component/breadCrumb.theme";
import NUMBERINPUT from "./component/numberinput.theme";

export default extendTheme({
  borderWidths: BORDER_WIDTHS,
  borderStyles: BORDER_STYLES,
  breakpoints: BREAKPOINTS,
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHT,
  colors: COLORS,
  radii: RADII,
  space: SPACES, // margins & paddings
  sizes: SIZES, // widths & heights
  styles: { global: GLOBAL },
  components: {
    Accordion: ACCORDIAN,
    Button: BUTTON,
    Breadcrumb: BREADCRUMB,
    Card: CARD,
    Checkbox: CHECKBOX,
    Divider: DIVIDER,
    FormError: FORMERROR,
    FormLabel: FORMLABEL,
    Input: INPUT,
    List: LIST,
    Link: LINK,
    Menu: MENU,
    NumberInput: NUMBERINPUT,
    Radio: RADIO,
    Select: SELECT,
    Slider: SLIDER,
    Text: TEXT,
    Tabs: TABS,
    Tag: TAG,
    Table: TABLE,
    Tooltip: TOOLTIP,
  },
});
