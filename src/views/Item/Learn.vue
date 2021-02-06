<template>
    <div class="learn">
        <van-progress :percentage="index*10" stroke-width="3"/>
        <div class="head">知识问答</div>
        <div class="main">
            <div class="form" v-if="show">
                <span>{{test[index].value}}</span>
                <van-radio-group v-model="radio[index]">
                    <van-radio name="a">A. {{test[index].a}}</van-radio>
                    <van-radio name="b">B. {{test[index].b}}</van-radio>
                    <van-radio name="c">C. {{test[index].c}}</van-radio>
                    <van-radio name="d">D. {{test[index].d}}</van-radio>
                </van-radio-group>
                <van-button plain type="primary" @click="go(-1)">上一题</van-button>
                <van-button plain type="info" @click="go(1)">下一题</van-button>
            </div>
            <div class="result" v-else>
                <span>本次答题的成绩 <br></span>
                <span>{{score}}分</span>
                <van-button plain type="info" @click="go('/nav')">返 回</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button, Progress, Radio, RadioGroup} from 'vant';

    Vue.use(Button);
    Vue.use(Progress);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    export default {
        name: "Learn",
        data() {
            return {
                radio: [],
                index: 0,
                show: true,
                test: [
                    {
                        value: '中国共产党是（ ）年诞生的',
                        a: '1919 ',
                        b: '1920',
                        c: '1921',
                        d: '1922',
                        ans: "c"
                    },
                    {
                        value: '中国共产党的宗旨是',
                        a: '全心全意为人民服务',
                        b: '实现社会主义现代化',
                        c: '民坚持党的基本路线和基本纲领不动摇',
                        d: '独立自主',
                        ans: "a"
                    },
                    {
                        value: '党章总纲指出：马克思列宁主义揭示了( )',
                        a: '共产党执政规律',
                        b: '社会主义建设规律',
                        c: '国家发展规律',
                        d: '人类社会历史发展规律',
                        ans: "d"
                    },
                    {
                        value: '党章规定，党的领导主要是( )的领导',
                        a: '政治和思想',
                        b: '思想和组织',
                        c: '政治、思想和组织',
                        d: '理论领导',
                        ans: "c"
                    },
                    {
                        value: '党章规定，党的最高领导机关是( )',
                        a: '党的全国代表大会和它所产生的中央委员会',
                        b: '党的全国代表大会',
                        c: '党的中央委员会',
                        d: '中央纪律检查委员会',
                        ans: "a"
                    },
                    {
                        value: '党的全国代表大会每五年举行一次，由中央委员会召集。在（）情况下，可以提前召开。',
                        a: '中央政治局认为有必要',
                        b: '二分之一以上的省一级组织提出要求',
                        c: '中央委员会认为有必要，或者有二分之一以上的省一级组织提出要求',
                        d: '中央委员会认为有必要，或者有三分之一以上的省一级组织提出要求',
                        ans: "d"
                    },
                    {
                        value: '回首近代以来中国波澜壮阔的历史，展望中华民族充满希望的未来，我们得出一个坚定的结论：全面建成小康社会，加快推进社会主 义现代化，实现中华民族伟大复兴，必须坚定不移（）',
                        a: '走改革开放之路',
                        b: '科学发展之路',
                        c: '社会主义道路',
                        d: '中国特色社会主义道路',
                        ans: "d"
                    },
                    {
                        value: '党的十九大报告强调，加快建立（）制度，健全国土空间开发、 资源节约、生态环境保护的体制机制，推动形成人与自然和谐发展现代化建设新格局',
                        a: '脱离群众',
                        b: '权力腐败',
                        c: '以权谋私',
                        d: '钱权交易',
                        ans: "a"
                    },
                    {
                        value: '党的十九届五中全会通过了中共中央关于“十四五”规划和____年远景日标的建议',
                        a: '生态补偿',
                        b: '资源节约',
                        c: '生态文明',
                        d: '税收',
                        ans: "c"
                    },
                    {
                        value: '新世纪新阶段,党中央抓住重要战略机遇期,强调坚持以人为本、 全面协调可持续发展,提出构建社会主义( )',
                        a: '和谐社会',
                        b: '文明社会',
                        c: '小康社会',
                        d: '法制社会',
                        ans: "a"
                    }
                ],
                scoreArr: [],
                score: 0
            }
        },
        methods: {
            go(index) {
                if (typeof index == 'number') {
                    if (this.radio[this.index] == this.test[this.index]['ans']) {
                        this.scoreArr[this.index] = 10
                    } else this.scoreArr[this.index] = 0
                    this.index += index;
                } else {
                    this.$router.push(index)
                }

            }
        },
        watch: {
            index: function () {
                if (this.index == 10) {
                    this.show = false;
                    this.scoreArr.forEach((item) => {
                        this.score += item
                    })
                }

            }
        },
        mounted() {
            this.scoreArr=[]
            this.radio =[]
            this.index =0
            this.score = 0
        }
    }
</script>

<style scoped lang="less">
    .learn {
        height: 100%;
        width: 100%;
        padding-top: 40px;

        .head {
            font-size: 25px;
            font-weight: 500;
            letter-spacing: 3px;
        }

        .main {
            text-align: left;
            width: 80%;
            margin: 20px auto;
            line-height: 40px;
            letter-spacing: 2px;

            .result {
                text-align: center;
                margin-top: 60px;
                letter-spacing: 2px;

                span {
                    display: block;
                    line-height: 60px;
                }

                span:nth-child(1) {
                    font-size: 25px;
                }

                span:nth-child(2) {
                    font-size: 30px;
                }

                /deep/ .van-button {
                    position: relative;
                    left: 0%;
                    top: 55px;
                    background-color: transparent;
                    margin: auto 10px;
                    border-radius: 5px;
                    color: rgba(53, 53, 53, 0.8);
                    border: 1px solid rgba(186, 186, 186, 0.75);
                    transform: scale(0.8);
                }
            }
        }
    }

    /deep/ .van-progress {
        margin: auto;
        margin-top: -5px;
        margin-bottom: 20px;
        width: 80%;
    }

    /deep/ .van-radio-group {
        text-align: left;
        width: 100%;
        margin: 10px 0;

        .van-radio {
            margin: 18px auto;
        }
    }

    /deep/ .van-button {
        position: relative;
        left: 23%;
        background-color: transparent;
        margin: auto 10px;
        border-radius: 5px;
        color: rgba(53, 53, 53, 0.8);
        border: 1px solid rgba(186, 186, 186, 0.75);
        transform: scale(0.9);
    }


</style>
