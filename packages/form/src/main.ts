import { App } from "vue";
import "./styles/index.scss";

import Text from "./components/Text/index.vue";
import TextArea from "./components/TextArea/index.vue";
import Switch from "./components/Switch/index.vue";
import Radio from "./components/Radio/index.vue";
import KeyValueConfig from "./common/KeyValueConfig.vue";
import KeyValueConfigMult from "./common/KeyValueConfigMult.vue";
import CheckBox from "./components/CheckBox/index.vue";
import JsonEditor from "./components/JsonEditor/index.vue";
import Rule from "./components/Rule/index.vue";
import ColorSelect from "./components/ColorSelect/index.vue";
import Date from "./components/Date/index.vue";
import Time from "./components/Time/index.vue";
import DateTime from "./components/DateTime/index.vue";
import InputNumber from "./components/InputNumber/index.vue";
import Slider from "./components/Slider/index.vue";
import Selected from "./components/Selected/index.vue";
import Selecteds from "./components/Selecteds/index.vue";
import RichText from "./components/RichText/index.vue";
import ShowRule from "./components/ShowRule/index.vue";

// 布局
import Grid from './layout/grid.vue';
import TableLayout from './layout/table.vue';
import Info from './layout/Info.vue';
import Divider from "./layout/Divider.vue";
import Collapse from './layout/collapse.vue';
import Tabs from './layout/Tabs.vue';

// 配置公共组件
import ListConfig from './common/listConfig.vue';
import Panel from './common/panel.vue';
import RadioGroup from './common/radiogroup.vue';
import formAction from './common/formAction.vue';
import Action from './common/action.vue';

export { default as Dynamicform } from "./starfish-form.vue";

// 可以单个导入表单组件
export { default as SText } from "./components/Text/index.vue";
export { default as STextArea } from "./components/TextArea/index.vue";
export { default as SSwitch } from "./components/Switch/index.vue";
export { default as SRadio } from "./components/Radio/index.vue";
export { default as SKeyValueConfig } from "./common/KeyValueConfig.vue";
export { default as SKeyValueConfigMult } from "./common/KeyValueConfigMult.vue";
export { default as SCheckBox } from "./components/CheckBox/index.vue";
export { default as SJsonEditor } from "./components/JsonEditor/index.vue";
export { default as SColorSelect } from "./components/ColorSelect/index.vue";
export { default as SDate } from "./components/Date/index.vue";
export { default as STime } from "./components/Time/index.vue";
export { default as SDateTime } from "./components/DateTime/index.vue";
export { default as SInputNumber } from "./components/InputNumber/index.vue";
export { default as SSlider } from "./components/Slider/index.vue";
export { default as SSelected } from "./components/Selected/index.vue";
export { default as SSelecteds } from "./components/Selecteds/index.vue";
export { default as SDivider } from "./layout/Divider.vue";
export { default as Rules } from "./components/Rule/index.vue";
export { default as SRichText } from "./components/RichText/index.vue";


export type {FormConfig} from './utils/fieldConfig';
export type {fields} from './utils/fieldConfig'

const formcomponents: any = {};
formcomponents[Text.ControlType] = Text;
formcomponents[TextArea.ControlType] = TextArea;
formcomponents[Switch.ControlType] = Switch;
formcomponents[Radio.ControlType] = Radio;
formcomponents[KeyValueConfig.ControlType] = KeyValueConfig;
formcomponents[KeyValueConfigMult.ControlType] = KeyValueConfigMult;
formcomponents[CheckBox.ControlType] = CheckBox;
formcomponents[JsonEditor.ControlType] = JsonEditor;
formcomponents[ColorSelect.ControlType] = ColorSelect;
formcomponents[Date.ControlType] = Date;
formcomponents[Time.ControlType] = Time;
formcomponents[DateTime.ControlType] = DateTime;
formcomponents[InputNumber.ControlType] = InputNumber;
formcomponents[Slider.ControlType] = Slider;
formcomponents[Selected.ControlType] = Selected;
formcomponents[Selecteds.ControlType] = Selecteds;
formcomponents[RichText.ControlType] = RichText;
// 布局
formcomponents[Grid.ControlType] = Grid;
formcomponents[TableLayout.ControlType] = TableLayout;
formcomponents[Collapse.ControlType] = Collapse;
formcomponents[Tabs.ControlType] = Tabs;
formcomponents[Divider.ControlType] = Divider;
formcomponents[Info.ControlType] = Info;

// 公共
formcomponents[ListConfig.ControlType] = ListConfig;
formcomponents[Panel.ControlType] = Panel;
formcomponents[Rule.ControlType] = Rule;
formcomponents[ShowRule.ControlType] = ShowRule;
formcomponents[RadioGroup.ControlType]= RadioGroup;
formcomponents[formAction.ControlType] = formAction;
formcomponents[Action.ControlType] = Action;


const install = (app: App) => {
  app.config.globalProperties.$formcomponents = formcomponents;
  for(const key in formcomponents){
    app.component(key, formcomponents[key]);
  }
};


export default {
  install,
};
