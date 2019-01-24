<template>
  <el-container>
    <el-header class="header">
      <span class="headertitle">Shape4Android..</span>
      <div class="ribbon right grey hidden-xs" style="z-index: 999">
        <a href="https://github.com/ditclear/shape4android">Fork me on GitHub</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="600px">
        <el-col :span="16">
          <el-radio-group v-model="tabPosition" style="margin-top: 50px;">
            <el-radio-button label="unable">unable</el-radio-button>
            <el-radio-button label="normal">normal</el-radio-button>
            <el-radio-button label="pressed">pressed</el-radio-button>
          </el-radio-group>
        </el-col>
        <div
          class="result"
          v-bind:style="{'background': realColor ,'border-radius':realRound+'px',
          'border': normal.border_width + 'px '+dashOrSolid+' '+normal.border_color ,
          'border-top-left-radius':realRoundTL+'px','border-top-right-radius':realRoundTR+'px',
          'border-bottom-left-radius':realRoundBL+'px','border-bottom-right-radius':realRoundBR+'px'}"
        ></div>
      </el-aside>

      <el-main>
        <el-container>
          <el-main>
            <div>
              <div style="margin: 20px;"></div>
              <el-form :label-position="labelPosition" :model="result">
                <el-form-item>
                  <el-col :span="3">
                    <el-checkbox checked disabled>normal</el-checkbox>
                  </el-col>
                </el-form-item>
                <el-form-item label>
                  <el-col :span="3">形状</el-col>
                  <el-col :span="5">
                    <el-select v-model="normal.shape" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="3">颜色：</el-col>
                  <el-col :span="1">
                    <el-color-picker v-model="normal.color"></el-color-picker>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="3">角度</el-col>
                  <el-col :span="5">
                    <el-input v-model="normal.round" :disabled="!simpleRound">
                      <template slot="append">dp</template>
                    </el-input>
                  </el-col>
                  <el-col :span="3">
                    <el-button
                      type="text"
                      @click="simpleRound=!simpleRound"
                    >[{{!simpleRound?'simple':'advanced'}}]</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-form-item>
                    <el-col>
                      <el-collapse-transition>
                        <div v-show="!simpleRound">
                          <el-col :span="3">左上角</el-col>
                          <el-col :span="5">
                            <el-input v-model="normal.round_tl">
                              <template slot="append">dp</template>
                            </el-input>
                          </el-col>
                          <el-col :span="3">右上角</el-col>
                          <el-col :span="5">
                            <el-input v-model="normal.round_tr">
                              <template slot="append">dp</template>
                            </el-input>
                          </el-col>
                          <el-col>
                            <el-col :span="3">左下角</el-col>
                            <el-col :span="5">
                              <el-input v-model="normal.round_bl">
                                <template slot="append">dp</template>
                              </el-input>
                            </el-col>
                            <el-col :span="3">右下角</el-col>
                            <el-col :span="5">
                              <el-input v-model="normal.round_br">
                                <template slot="append">dp</template>
                              </el-input>
                            </el-col>
                          </el-col>
                        </div>
                      </el-collapse-transition>
                    </el-col>
                  </el-form-item>
                </el-form-item>
                <el-form-item label>
                  <el-col :span="3">边框</el-col>
                  <el-col :span="5">
                    <el-input v-model="normal.border_width">
                      <template slot="append">dp</template>
                    </el-input>
                  </el-col>
                  <el-col class="line" :span="3">边框颜色：</el-col>
                  <el-col :span="1">
                    <el-color-picker v-model="normal.border_color"></el-color-picker>
                  </el-col>
                  <el-col :span="4">
                    <el-checkbox v-model="dashed">虚线</el-checkbox>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="3">
                    <el-checkbox v-model="needPresse">pressed</el-checkbox>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col>
                    <el-collapse-transition>
                      <div v-show="needPresse">
                        <el-col :span="3">颜色</el-col>
                        <el-col :span="1">
                          <el-color-picker v-model="pressed.color"></el-color-picker>
                        </el-col>
                      </div>
                    </el-collapse-transition>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="3">
                    <el-checkbox v-model="needUnable">unable</el-checkbox>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col>
                    <el-collapse-transition>
                      <div v-show="needUnable">
                        <el-col :span="3">颜色</el-col>
                        <el-col :span="1">
                          <el-color-picker v-model="unable.color"></el-color-picker>
                        </el-col>
                      </div>
                    </el-collapse-transition>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="4">
                    <el-checkbox v-model="needOverride">自定义文件名</el-checkbox>
                  </el-col>
                  <el-form-item>
                    <el-col span="3">
                      <el-button type="text" @click="dialogVisible = true">➡️默认命名规则</el-button>
                    </el-col>
                    <el-dialog
                      title="默认命名规则"
                      :visible.sync="dialogVisible"
                      width="50%"
                      :before-close="handleClose"
                      center="false"
                    >
                      <el-form-item label="shape:" label-width="100px">
                        <el-col
                          span="5"
                        >shape_type_color_roundTL_roundTR_roundBL_roundBR_borderWidth_borderColor.xml</el-col>
                      </el-form-item>

                      <el-form-item label="selector:" label-width="100px">
                        <el-col span="5" top>selector_shape_n_color_p_pressedColor_u_unableColor.xml</el-col>
                      </el-form-item>
                      <div>注意：</div>
                      <span>
                        如果自定义名称，那么selector中的shape默认会跟上type名，比如
                        xx_norm.xml/xx_pressed.xml/xx_unable.xml
                      </span>
                    </el-dialog>
                  </el-form-item>
                </el-form-item>
                <el-form-item>
                  <el-col>
                    <el-collapse-transition>
                      <div v-show="needOverride">
                        <el-col :span="10" style="margin-left:20px">
                          <el-input v-model="shapeName" placeholder="请输入文件名"></el-input>
                        </el-col>
                      </div>
                    </el-collapse-transition>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col span="5">
                    <el-button type="primary" icon="el-icon-download" @click="saveAsXml">下载</el-button>
                  </el-col>
                </el-form-item>
              </el-form>
            </div>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { saveAs } from "file-saver";

export default {
  name: "Shape",
  data() {
    return {
      dialogVisible: false,
      labelPosition: "left",
      tabPosition: "normal",
      shapeName: "", //自定义的文件名
      needOverride: false, //需要自定义文件名称
      needPresse: false, //需要pressed文件
      needUnable: false, //需要unable文件
      simpleRound: true, //统一使用相同的圆角
      dashed: false, //边框虚线
      options: [
        //形状，oval or rectangle
        {
          value: "rectangle",
          label: "rectangle"
        },
        {
          value: "oval",
          label: "oval"
        }
      ],
      normal: {
        shape: "rectangle",
        round: "0",
        round_tl: "0",
        round_tr: "0",
        round_bl: "0",
        round_br: "0",
        border_width: "0",
        border_color: "#409EFF",
        color: "#409EFF",
        state: "点击前"
      },
      pressed: {
        clicked: false,
        color: "#409EFF"
      },
      unable: {
        color: "#409EFF"
      }
    };
  },
  computed: {
    // 计算属性的 getter
    realRound: function() {
      // `this` 指向 vm 实例
      if (this.normal.shape == "oval") {
        return 100;
      }
      return this.normal.round;
    },
    realRoundTL() {
      if (this.normal.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.normal.round;
      }
      return this.normal.round_tl;
    },
    realRoundTR() {
      if (this.normal.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.normal.round;
      }
      return this.normal.round_tr;
    },
    realRoundBL() {
      if (this.normal.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.normal.round;
      }
      return this.normal.round_bl;
    },
    realRoundBR() {
      if (this.normal.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.normal.round;
      }
      return this.normal.round_br;
    },
    dashOrSolid() {
      return this.dashed ? "dashed" : "solid";
    },
    realColor: function() {
      if (this.tabPosition == "pressed" && this.needPresse) {
        return this.pressed.color;
      } else if (this.tabPosition == "unable" && this.needUnable) {
        return this.unable.color;
      } else {
        return this.normal.color;
      }
    }
  },
  methods: {
    /**
     * 组装shape的xml
     * @augments type normal/pressed/unable
     * @augments color 颜色
     * @returns fileName,xml
     */
    provideXmlTemplate(type, color) {
      var xml =
        "<?xml version=" +
        this.wrapWithQuote("1.0") +
        " encoding=" +
        this.wrapWithQuote("utf-8") +
        "?>\n" +
        "<shape xmlns:android=" +
        '"http://schemas.android.com/apk/res/android"\n' +
        "android:shape=" +
        this.wrapWithQuote(this.normal.shape) +
        ">\n" +
        "<solid android:color=" +
        this.wrapWithQuote(color) +
        "/>\n" +
        "<stroke android:color=" +
        this.wrapWithQuote(this.normal.border_color) +
        " android:width=" +
        this.wrapWithQuote(this.normal.border_width + "dp");
      if (this.dashed) {
        xml +=
          " android:dashGap=" +
          this.wrapWithQuote("3dp") +
          " android:dashWidth=" +
          this.wrapWithQuote("3dp");
      }

      xml += "/>\n";
      if (this.normal.shape != "oval") {
        xml +=
          "<corners " +
          "android:topLeftRadius=" +
          this.wrapWithQuote(this.realRoundTL + "dp") +
          "\n" +
          "android:topRightRadius=" +
          this.wrapWithQuote(this.realRoundTR + "dp") +
          "\n" +
          "android:bottomLeftRadius=" +
          this.wrapWithQuote(this.realRoundBL + "dp") +
          "\n" +
          "android:bottomRightRadius=" +
          this.wrapWithQuote(this.realRoundBR + "dp") +
          "\n" +
          "/>\n";
      }

      xml += "</shape>";
      var fileName = "";
      if (!this.needOverride) {
        fileName =
          this.normal.shape +
          "_" +
          type +
          "_" +
          color.slice(1, 7) +
          "_" +
          this.realRoundTL +
          "_" +
          this.realRoundTR +
          "_" +
          this.realRoundBL +
          "_" +
          this.realRoundBR +
          "_" +
          this.normal.border_width +
          "_" +
          this.normal.border_color.slice(1, 7);
      } else {
        fileName = this.shapeName + "_" + type;
      }

      return { fileName: fileName, xml: xml };
    },
    /**
     * 组装selector
     * */

    provideSelector() {
      var JSZip = require("jszip");
      var zip = new JSZip();
      var normalFile = this.provideXmlTemplate("normal", this.normal.color);
      var normalFileName = normalFile.fileName;
      var normalXml = normalFile.xml;
      zip.file(normalFileName + ".xml", normalXml);
      if (this.needPresse) {
        var pressedFile = this.provideXmlTemplate(
          "pressed",
          this.pressed.color
        );
        var pressedFileName = pressedFile.fileName;
        var pressedXml = pressedFile.xml;
        zip.file(pressedFileName + ".xml", pressedXml);
      }
      if (this.needUnable) {
        var unableFile = this.provideXmlTemplate("unable", this.unable.color);
        var unableFileName = unableFile.fileName;
        var unableXml = unableFile.xml;
        zip.file(unableFileName + ".xml", unableXml);
      }
      var selectorXml =
        "<?xml version=" +
        this.wrapWithQuote("1.0") +
        " encoding=" +
        this.wrapWithQuote("utf-8") +
        "?>\n" +
        "<selector xmlns:android=" +
        this.wrapWithQuote("http://schemas.android.com/apk/res/android") +
        ">\n" +
        "<item android:drawable=" +
        this.wrapWithQuote("@drawable/" + normalFileName) +
        "\n android:state_enabled=" +
        this.wrapWithQuote("true") +
        " android:state_pressed=" +
        this.wrapWithQuote("false") +
        "/>\n";

      var fileName =
        "selector_" + this.normal.shape + "_n_" + this.normal.color.slice(1, 7);

      if (this.needPresse) {
        selectorXml +=
          "<item android:drawable=" +
          this.wrapWithQuote("@drawable/" + pressedFileName) +
          "\n " +
          " android:state_enabled=" +
          this.wrapWithQuote("true") +
          " android:state_pressed=" +
          this.wrapWithQuote("true") +
          "/>\n";
        fileName += "_p_" + this.pressed.color.slice(1, 7);
      }
      if (this.needUnable) {
        selectorXml +=
          "<item android:drawable=" +
          this.wrapWithQuote("@drawable/" + unableFileName) +
          "\n " +
          "android:state_enabled=" +
          this.wrapWithQuote("false") +
          "/>\n";
        fileName += "_u_" + this.unable.color.slice(1, 7);
      }

      selectorXml += "</selector>";
      if (this.needOverride) {
        fileName = this.shapeName;
      }
      zip.file(fileName + ".xml", selectorXml);
      zip.generateAsync({ type: "blob" }).then(function(content) {
        // see FileSaver.js
        saveAs(content, fileName + ".zip");
      });
    },
    /**
     * 生成xml
     */
    saveAsXml() {
      this.shapeName = this.shapeName.trim();

      if (this.needOverride && this.shapeName == "") {
        this.warning("请输入文件名称");
        return;
      }
      if (!this.needPresse && !this.needUnable) {
        var { fileName, xml } = this.provideXmlTemplate(
          "normal",
          this.normal.color
        );
        if (this.needOverride) {
          fileName = this.shapeName;
        }
        var blob = new Blob([xml], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, fileName + ".xml");
      } else {
        this.provideSelector();
      }
      this.toast("下载成功");
    },
    wrapWithQuote(param) {
      return '"' + param + '"';
    },
    toast(message) {
      this.$notify({
        title: "成功",
        message: message,
        type: "success"
      });
    },
    warning(message) {
      this.$message({
        message: message,
        type: "warning"
      });
    }
  }
};
</script>

<style>
.header {
  font-family: "Helvetica Neue";
  min-height: 150px;
  font-style: inherit;
  text-align: center;
  display: flex;
  background-color: #64b587;
}
.headertitle {
  margin: auto;
  color: white;
  display: inline-block;
  width: 21ch;
  font: bold 200% Consolas, Monaco, monospace; /*Monospaced font*/
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  border-right: 1px solid transparent;
  animation: typing 10s steps(21), caret 0.5s steps(1) infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-right-color: currentColor;
  }
}

.result {
  max-width: 200px;
  margin-top: 125px;
  margin-left: 100px;
  width: 200px;
  height: 200px;
}

.result:active {
  background-color: yellow;
}

.xml {
  min-height: 100px;
  margin-top: 20px;
  background: #efebe9;
  border: 5px solid #b4a078;
  outline: #b4a078 dashed 1px;
  outline-offset: -10px;
  margin-bottom: 20px;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
p {
  font-family: "Helvetica Neue";
}
.ribbon {
  position: absolute;
  top: 42px;
  width: 200px;
  padding: 1px 0;
  background: #000;
  font-family: "Helvetica Neue";
  color: #eee;
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.ribbon.grey {
  background: #888;
}
.ribbon.right {
  right: -42px;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.ribbon a,
.ribbon a:visited,
.ribbon a:active,
.ribbon a:hover {
  display: block;
  padding: 1px 0;
  height: 24px;
  line-height: 24px;
  color: inherit;
  text-align: center;
  text-decoration: none;
  font-family: "Cabin Condensed", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  -moz-text-shadow: 0 0 10px rgba(0, 0, 0, 0.31);
  -webkit-text-shadow: 0 0 10px rgba(0, 0, 0, 0.31);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.31);
}
</style>
