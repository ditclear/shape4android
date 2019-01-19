<template>
  <el-container>
    <el-header class="header">
      <span class="headertitle">Shape4Android..</span>
    </el-header>
    <el-container>
      <el-aside width="600px">
        <el-col :span="16">
          <el-radio-group v-model="tabPosition" style="margin-top: 30px;">
            <el-radio-button label="unable">unable</el-radio-button>
            <el-radio-button label="normal">normal</el-radio-button>
            <el-radio-button label="pressed">pressed</el-radio-button>
          </el-radio-group>
        </el-col>
        <div
          class="result"
          v-bind:style="{'background': realColor ,'border-radius':realRound+'px',
          'border': result.border_width + 'px solid '+result.border_color ,
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
                    <el-select v-model="result.shape" placeholder="请选择">
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
                    <el-color-picker v-model="result.color"></el-color-picker>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-col :span="3">角度</el-col>
                  <el-col :span="5">
                    <el-input v-model="result.round" :disabled="!simpleRound">
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
                            <el-input v-model="result.round_tl">
                              <template slot="append">dp</template>
                            </el-input>
                          </el-col>
                          <el-col :span="3">左下角</el-col>
                          <el-col :span="5">
                            <el-input v-model="result.round_tr">
                              <template slot="append">dp</template>
                            </el-input>
                          </el-col>
                          <el-col>
                            <el-col :span="3">右上角</el-col>
                            <el-col :span="5">
                              <el-input v-model="result.round_bl">
                                <template slot="append">dp</template>
                              </el-input>
                            </el-col>
                            <el-col :span="3">右下角</el-col>
                            <el-col :span="5">
                              <el-input v-model="result.round_br">
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
                    <el-input v-model="result.border_width">
                      <template slot="append">dp</template>
                    </el-input>
                  </el-col>
                  <el-col class="line" :span="3">边框颜色：</el-col>
                  <el-col :span="1">
                    <el-color-picker v-model="result.border_color"></el-color-picker>
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
                  <el-col span="3">
                    <el-button type="primary" icon="el-icon-download" @click="saveAsXml">下载</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item label="命名规则"></el-form-item>
                <el-form-item label="shape:" label-width="100px">
                  <el-col
                    span="5"
                  >shape_type_color_roundTL_roundTR_roundBL_roundBR_borderWidth_borderColor.xml</el-col>
                </el-form-item>

                <el-form-item label="selector:" label-width="100px">
                  <el-col span="5" top>selector_shape_n_color_p_pressedColor_u_unableColor.xml</el-col>
                </el-form-item>
                <el-form-item>
                  <el-col span="3">
                    <span>made by
                      <a href="https://github.com/ditclear" target="_blank">ditclear</a>
                    </span>
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
      labelPosition: "left",
      tabPosition: "normal",
      needPresse: false,
      needUnable: false,
      simpleRound: true,
      options: [
        {
          value: "rectangle",
          label: "rectangle"
        },
        {
          value: "oval",
          label: "oval"
        }
      ],
      shapeXml: "",
      result: {
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
  mounted() {
    this.$refs.range.oninput = ({ target: { value } }) => {
      this.width = `${60 + value * 0.4}%`;
    };
  },
  computed: {
    // 计算属性的 getter
    realRound: function() {
      // `this` 指向 vm 实例
      if (this.result.shape == "oval") {
        return 100;
      }
      return this.result.round;
    },
    realRoundTL() {
      if (this.result.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.result.round;
      }
      return this.result.round_tl;
    },
    realRoundTR() {
      if (this.result.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.result.round;
      }
      return this.result.round_tr;
    },
    realRoundBL() {
      if (this.result.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.result.round;
      }
      return this.result.round_bl;
    },
    realRoundBR() {
      if (this.result.shape == "oval") {
        return 100;
      }
      if (this.simpleRound) {
        return this.result.round;
      }
      return this.result.round_br;
    },
    realColor: function() {
      if (this.tabPosition == "pressed" && this.needPresse) {
        return this.pressed.color;
      } else if (this.tabPosition == "unable" && this.needUnable) {
        return this.unable.color;
      } else {
        return this.result.color;
      }
    }
  },
  methods: {
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
        this.wrapWithQuote(this.result.shape) +
        ">\n" +
        "<solid android:color=" +
        this.wrapWithQuote(color) +
        "/>\n" +
        "<stroke android:color=" +
        this.wrapWithQuote(this.result.border_color) +
        " android:width=" +
        this.wrapWithQuote(this.result.border_width + "dp") +
        "/>\n";
      if (this.result.shape != "oval") {
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

      var fileName =
        this.result.shape +
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
        this.result.border_width +
        "_" +
        this.result.border_color.slice(1, 7);

      return { fileName: fileName, xml: xml };
    },
    provideSelecter() {
      var JSZip = require("jszip");
      var zip = new JSZip();
      var normalFile = this.provideXmlTemplate("normal", this.result.color);
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
        "selector_" + this.result.shape + "_n_" + this.result.color.slice(1, 7);

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

      zip.file(fileName + ".xml", selectorXml);
      zip.generateAsync({ type: "blob" }).then(function(content) {
        // see FileSaver.js
        saveAs(content, fileName + ".zip");
      });
    },
    generateXml() {
      if (!this.needPresse && !this.needUnable) {
        var { fileName, xml } = this.provideXmlTemplate(
          "normal",
          this.result.color
        );
        var blob = new Blob([xml], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, fileName + ".xml");
      } else {
        this.provideSelecter();
      }
    },
    saveAsXml() {
      this.generateXml();
      this.open3("下载成功");
    },
    wrapWithQuote(param) {
      return '"' + param + '"';
    },
    open3(message) {
      this.$notify({
        title: "成功",
        message: message,
        type: "success"
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
  margin-top: 100px;
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
</style>
