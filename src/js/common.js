var vue = new Vue({
    el: "#container",
    data() {
        return {
            page: 1,
            time: 0.000,
            curTime: 0.000,
            isHide: false,
            isBgHide: true,
            isRight: false,
            isWrong: false,
            question: [
                {
                    title: "谁在小红录歌时溜进了广播室？",
                    sec1Img: "https://gw.alicdn.com/mt/TB1URLzSpXXXXbdXVXXXXXXXXXX-320-540.jpg",
                    sec1Tag: "秋水",
                    sec2Img: "https://gw.alicdn.com/mt/TB1V5DtSpXXXXcfXVXXXXXXXXXX-320-540.jpg",
                    sec2Tag: "小白",
                    answer: "秋水"
                },
                {
                    title: "辛夷用哪个字来形容秋水？",
                    sec1Img: "https://gw.alicdn.com/mt/TB1tWPRSpXXXXaeXpXXXXXXXXXX-320-540.jpg",
                    sec1Tag: "贱",
                    sec2Img: "https://gw.alicdn.com/mt/TB1DbLBSpXXXXcvXFXXXXXXXXXX-320-540.jpg",
                    sec2Tag: "污",
                    answer: "贱"
                },
                {
                    title: "秋水痴迷于哪项活动？",
                    sec1Img: "https://gw.alicdn.com/mt/TB1q8nESpXXXXcGXFXXXXXXXXXX-320-540.jpg",
                    sec1Tag: "看书",
                    sec2Img: "https://gw.alicdn.com/mt/TB1z_W8SpXXXXcKaFXXXXXXXXXX-320-540.jpg",
                    sec2Tag: "削土豆",
                    answer: "看书"
                },
                {
                    title: "小红认为全校最美的女生是？",
                    sec1Img: "https://gw.alicdn.com/mt/TB1YK2hSpXXXXXoapXXXXXXXXXX-320-540.jpg",
                    sec1Tag: "赵英来",
                    sec2Img: "https://gw.alicdn.com/mt/TB1uXvmSpXXXXXXapXXXXXXXXXX-320-540.jpg",
                    sec2Tag: "她自己",
                    answer: "她自己"
                },
                {
                    title: "小红为何一直整蛊秋水？",
                    sec1Img: "https://gw.alicdn.com/mt/TB1uyW8SpXXXXclaFXXXXXXXXXX-320-540.jpg",
                    sec1Tag: "爱开玩笑",
                    sec2Img: "https://gw.alicdn.com/mt/TB1v1TESpXXXXaRXFXXXXXXXXXX-320-540.jpg",
                    sec2Tag: "和谈失败",
                    answer: "和谈失败"
                }
            ]
        }
    },
    filters: {  
        filterTime: function (value) {  
            return value.toFixed(3)
        }  
    },
    methods: { 
        start() {  
            this.time = 0.000
            this.isHide = true
            console.log(this.page)
            let that = this
            setTimeout(() => {
                that.isHide = false
                that.page = 2
            }, 2500)
            var allTime = setTimeout(() => {
               if(this.page == 6 ) {
                    clearTimeout(allTime)
                }else {
                    that.timedCount()
                }
            }, 0.0001)
           
        },
        timedCount() {
            let that = this
            var t = setInterval(() => {
                if(this.page == 6) {
                     clearInterval(t)
                 } else {
                    that.time =that.time + 0.001
                 }
            }, 0.1)
           
        },
        trueAn() {       
                this.isRight = true
                setTimeout(() => {
                    this.isRight = false
                }, 500)
                setTimeout(() => { 
                    this.page = this.page + 1        
                }, 520)
        },
        falseAn() {
            this.isWrong = true
            Promise.resolve(
                setTimeout(() => {
                    this.isWrong = false
                }, 500)
            )
            Promise.resolve(
                  setTimeout(() => {
                    this.page = 7
                  }, 520) 
            )
            this.time = 0.000
        },
        again() {
            this.page = 1
        }

    }
})




