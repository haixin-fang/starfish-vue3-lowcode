<template>
  <div class="starfish-formitem" :class="drag ? 'formCover' : ''">
    <div class="label">
      <label>{{ item.data.label }}</label>
      <span v-if="item.data.required" class="item_require">*</span>
      <el-tooltip v-if="item.data.tip" class="item" effect="dark" :content="item.data.tip" placement="top">
        <span class="tip iconfont icon-tishi"></span>
      </el-tooltip>
    </div>
    <div class="control">
      <div class="keyValueItem" v-for="(items, index) in data[item.data.fieldName].items" :key="index">
        <div class="keyValueSelect">
          <el-checkbox v-model="items.select" @change="getChangeSelect(items)"></el-checkbox>
        </div>
        <div class="keyValueInput">
          <div class="inputItem">
            <span>文本：</span>
            <div>
              <el-input v-model="items.label" size="small" @input="getChangeValue(items)" />
            </div>
          </div>
          <div class="inputItem">
            <span>值：</span>
            <div>
              <el-input v-model="items.value" size="small" @input="getChangeValue(items)" />
            </div>
          </div>
        </div>
        <div class="keyValueControl">
          <div class="add" @click="addItem(index)">
            <i class="iconfont icon-zengjia"></i>
          </div>
          <div class="remove" @click="removeItem(index)">
            <i class="iconfont icon-shanchu"></i>
          </div>
          <div class="top" @click="handleTop(index)">
            <i class="iconfont icon-shangyi"></i>
          </div>
          <div class="bottom" @click="handleBottom(index)">
            <i class="iconfont icon-xiayi"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { getFormConfig } from "../../utils/fieldConfig";
  import fieldProps from "../../utils/fieldProps";
  import { useWatch } from "../../utils/customHooks";
  export default defineComponent({
    ControlType: "KeyValueConfigMult", // 必须与文件名匹配
    nameCn: "多选键值对匹配",
    icon: "icon-danxuankuang",
    isHide: true,
    getFormConfig: getFormConfig("KeyValueConfigMult"),
    setup(props) {
      useWatch(props.data);
      function getMaxId() {
        let maxId = 0;
        const data: any = props.data;
        const item: any = props.item;
        const allItems = data[item.data.fieldName];
        allItems.items.forEach((item: any) => {
          maxId = Math.max(item.id, maxId);
        });
        return maxId + 1;
      }
      return {
        getChangeValue() {
          const data: any = props.data;
          const item: any = props.item;
          const allItems = data[item.data.fieldName];
          allItems.value = [];
          allItems.items.forEach((item: any) => {
            if (item.select) {
              allItems.value.push(item.value);
            }
          });
        },
        getChangeSelect(sitem: any) {
          const data: any = props.data;
          const item: any = props.item;
          const allItems = data[item.data.fieldName];
          if (sitem.select) {
            allItems.value.push(sitem.value);
          } else {
            allItems.value = [];
            allItems.items.forEach((item: any) => {
              if (item.select) {
                allItems.value.push(item.value);
              }
            });
          }
        },

        removeItem(index: number) {
          const data: any = props.data;
          const item: any = props.item;
          const allItems = data[item.data.fieldName];
          if (allItems.items.length <= 1) return;
          allItems.items.splice(index, 1);
        },
        handleTop(index: number) {
          if (index > 0) {
            const data: any = props.data;
            const item: any = props.item;
            const allItem = data[item.data.fieldName].items;
            const newItem = allItem.splice(index, 1)[0];
            allItem.splice(index - 1, 0, newItem);
          }
        },
        handleBottom(index: number) {
          const data: any = props.data;
          const item: any = props.item;
          const allItem = data[item.data.fieldName].items;
          if (index < allItem.length - 1) {
            const newItem = allItem.splice(index, 1)[0];
            allItem.splice(index + 1, 0, newItem);
          }
        },
        addItem(index: number) {
          const maxId = getMaxId();
          const data: any = props.data;
          const item: any = props.item;
          const allItems = data[item.data.fieldName];
          allItems.items.splice(index + 1, 0, {
            label: "选项" + maxId,
            value: "选项" + maxId,
            select: false,
            id: maxId,
          });
        },
      };
    },
    props: {
      ...fieldProps,
    },
  });
</script>
<style scoped lang="scss">
  .keyValueItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    border: 1px solid #eee;
    margin-bottom: 6px;
    border-radius: 10px;
    padding: 10px 0;
    .keyValueSelect {
      width: 30px;
      text-align: center;
    }
    .keyValueInput {
      flex: 1;
      .inputItem {
        line-height: 20px;
      }
      > div {
        margin-bottom: 7px;
        span {
          display: block;
          margin-bottom: 6px;
        }
      }
    }
    .keyValueControl {
      width: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      > div {
        width: 17px;
        height: 17px;
        border: 1px solid #eee;
        border-radius: 50%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0;
      }
      .add {
        background: #409eff;
        color: white;
      }
      .remove {
        background: red;
        color: white;
      }
      i {
        font-size: 12px;
      }
    }
  }
</style>
