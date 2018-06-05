document.addEventListener('DOMContentLoaded', function () {

    var snd = new Audio("/assets/notification.mp3");

    Vue.component('line-chart', {
        extends: VueChartJs.Line,
        mixins: [VueChartJs.mixins.reactiveProp],
        props: ['options'],
        mounted () {
            // this.chartData is created in the mixin.
            // If you want to pass options please create a local options object
            var options = { responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        // Include a dollar sign in the ticks
                                        callback: function(value, index, values) {
                                            return 'CHF ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        }
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Zeit in Jahren'
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }]
                            },
                            legend: {
                                display: false,
                            }
            };
            options.scales.xAxes[0].scaleLabel.labelString = this.options;
            this.renderChart(this.chartData, options)
        }
      })

      Vue.component('doughnut-chart', {
        extends: VueChartJs.Doughnut,
        mixins: [VueChartJs.mixins.reactiveProp],
        props: ['options'],
        mounted () {
            // this.chartData is created in the mixin.
            // If you want to pass options please create a local options object
            var options = { responsive: true,
                            maintainAspectRatio: false,
                            legend: {
                                display: false,
                            }
			};
            this.renderChart(this.chartData, options)
        }
      })

    
    var app = new Vue({
        el: '#app',
        data: {
            activeView: {
                        welcome: 1,
                        hideLuna: 0,
                        overLay: 0,
                        whiteOverlay: 0,
                        hiThere: 0,
                        myService: 0,
                        lifeGoals: 0,
                        tooComplex: 0,
                        moreInfo: 0,
                        getStarted: 0,
                        questions: 0,
                        lessons: 0,
                        lessonOne: 0,
                        lessonTwo: 0,
                        lessonThree: 0,
                        lessonFour: 0,
                        firstGoal: 0,
                        loadingDashboard: 0,
                        dashboard: 0,
                        editGoal: 0,
                        setSavingAmountOverlay: 0,
                        setAmount: 0,
                        pillar3a: 0,
                        pillar3aResults: 0,
                        checkInputs: 0
                        },
            controls:   {
                lessonFour: {
                    bottomReached: false
                },
                firstGoal: {
                    collapse: "",
                    collapsed: false
                },
                setAmount: {
                    progress: 0,
                    amountSet: false
                },
            },
            formInline: {
                user: 'Fabio',
                password: 'luna',
                age: 30
            },
            ruleInline: {
                user: [
                    { required: true, message: 'Bitte gib deinen Vornamen ein.', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Bitte gib das Passwort ein.', trigger: 'blur' },
                ]
            },
            sound: false,
            chatMessagesControl: {
                    hiThere:    [{
                                    msg: 1,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 2,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 3,
                                    loading: 0,
                                    show: 0
                                }],
                    myService:  [{
                                    msg: 1,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 2,
                                    loading: 0,
                                    show: 0
                                }],
                    lifeGoals:  [{
                                    msg: 1,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 2,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 3,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 4,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 5,
                                    loading: 0,
                                    show: 0
                                }],
                    tooComplex:  [{
                                    msg: 1,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 2,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 3,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 4,
                                    loading: 0,
                                    show: 0
                                }],
                    moreInfo:   [{
                                    msg: 1,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 2,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 3,
                                    loading: 0,
                                    show: 0
                                }],
                    getStarted: [{
                                    msg: 1,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 2,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 3,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 4,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 5,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 6,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 7,
                                    loading: 0,
                                    show: 0
                                },
                                {
                                    msg: 8,
                                    loading: 0,
                                    show: 0
                                }]
            },
            getStartedParameters:   {
                                        investmentHorizon: 35,
                                        initialInvestment: 70000,
                                        monthlyInvestment: 1200
                                    },
            questions: {
                employment: [
                    {
                        value: "Angestellt",
                        label: "Angestellt"
                    },
                    {
                        value: "Selbstständig",
                        label: "Selbstständig"
                    },
                    {
                        value: "Pensioniert",
                        label: "Pensioniert"
                    },
                    {
                        value: "Student",
                        label: "Student"
                    },
                    {
                        value: "Hausmann/Hausfrau",
                        label: "Hausmann/Hausfrau"
                    },
                    {
                        value: "Arbeitslos",
                        label: "Arbeitslos"
                    }
                ],
                household: [
                    {
                        value: "Einfaches Einkommen, keine Kinder",
                        label: "Einfaches Einkommen, keine Kinder"
                    },
                    {
                        value: "Einfaches Einkommen, mind. ein Kind",
                        label: "Einfaches Einkommen, mind. ein Kind"
                    },
                    {
                        value: "Doppeltes Einkommen, keine Kinder",
                        label: "Doppeltes Einkommen, keine Kinder"
                    },
                    {
                        value: "Doppeltes Einkommen, mind. ein Kind",
                        label: "Doppeltes Einkommen, mind. ein Kind"
                    },
                    {
                        value: "Pensioniert oder finanziell unabhängig",
                        label: "Pensioniert oder finanziell unabhängig"
                    }
                ],
                income: [
                    {
                        value: "Unter CHF 50k",
                        label: "Unter CHF 50k"
                    },
                    {
                        value: "CHF 50 - 100k",
                        label: "CHF 50 - 100k"
                    },
                    {
                        value: "CHF 100 - 150k",
                        label: "CHF 100 - 150k"
                    },
                    {
                        value: "CHF 150 - 250k",
                        label: "CHF 150 - 250k"
                    },
                    {
                        value: "CHF 250 - 500k",
                        label: "CHF 250 - 500k"
                    },
                    {
                        value: "Über CHF 500k",
                        label: "Über CHF 500k"
                    }
                ],
                assets: [
                    {
                        value: "Unter CHF 50k",
                        label: "Unter CHF 50k"
                    },
                    {
                        value: "CHF 50 - 100k",
                        label: "CHF 50 - 100k"
                    },
                    {
                        value: "CHF 100 - 150k",
                        label: "CHF 100 - 150k"
                    },
                    {
                        value: "CHF 150 - 250k",
                        label: "CHF 150 - 250k"
                    },
                    {
                        value: "CHF 250 - 500k",
                        label: "CHF 250 - 500k"
                    },
                    {
                        value: "Über CHF 500k",
                        label: "Über CHF 500k"
                    }
                ]
            },
            answers: {
                employment: "",
                pensionskasse: "",
                säule3a: "",
                betrag3a: "",
                household: "",
                assets: "",
                income: "",
                realestate: "",
                realestateValue: "",
                mortgage: ""
            },
            goalSimulation:   {
                investmentHorizon: 35,
                initialInvestment: 70000,
                monthlyInvestment: 1200,
                proportion: 100,
                periodicIncrease: true,
                options: 'Dein Alter',
                editing: true
            },
            monthlyInvestment: {
                amount: 0,
                account: "",
                säule3a: 100,
                numberOfAccounts: '3',
                amountFinal: 0
            }
        },
        computed: {
            chatMessages() {
                return  {
                    hiThere:    [{
                                    msg: "Hallo "+ this.formInline.user,
                                    loading: this.chatMessagesControl.hiThere[0].loading,
                                    show: this.chatMessagesControl.hiThere[0].show
                                },
                                {
                                    msg: "Ich bin Luna, dein persönlicher Finanzberater",
                                    loading: this.chatMessagesControl.hiThere[1].loading,
                                    show: this.chatMessagesControl.hiThere[1].show
                                },
                                {
                                    msg: "Gerne würde ich dir dabei helfen, deine Finanzen optimal zu planen!",
                                    loading: this.chatMessagesControl.hiThere[2].loading,
                                    show: this.chatMessagesControl.hiThere[2].show
                                }],
                    myService:    [{
                                    msg: "Nun, ich mache viele Dinge!",
                                    loading: this.chatMessagesControl.myService[0].loading,
                                    show: this.chatMessagesControl.myService[0].show
                                },
                                {
                                    msg: "Meine grosse Stärke liegt aber darin, dein Geld so anzulegen, dass die Anlagestrategie optimal zu deinen Lebenszielen passt.",
                                    loading: this.chatMessagesControl.myService[1].loading,
                                    show: this.chatMessagesControl.myService[1].show
                                }],
                    lifeGoals:  [{
                                    msg: "Ja genau!",
                                    loading: this.chatMessagesControl.lifeGoals[0].loading,
                                    show: this.chatMessagesControl.lifeGoals[0].show
                                },
                                {
                                    msg: "Ein Beispiel: Du möchtest bei deiner Pensionierung von deinen Investments leben können und monatlich 6000 Franken zum Leben haben…",
                                    loading: this.chatMessagesControl.lifeGoals[1].loading,
                                    show: this.chatMessagesControl.lifeGoals[1].show
                                },
                                {
                                    msg: "…oder du wünschst dir, in 5 Jahren das Haus deiner Träume kaufen zu können",
                                    loading: this.chatMessagesControl.lifeGoals[2].loading,
                                    show: this.chatMessagesControl.lifeGoals[2].show
                                },
                                {
                                    msg: "…auf eine grosse Reise zu gehen… <br> …zu heiraten…",
                                    loading: this.chatMessagesControl.lifeGoals[3].loading,
                                    show: this.chatMessagesControl.lifeGoals[3].show
                                },
                                {
                                    msg: "oder vielleicht verfolgst du auch nur das Ziel, eine top Rendite zu erwirtschaften und den Markt zu schlagen!",
                                    loading: this.chatMessagesControl.lifeGoals[4].loading,
                                    show: this.chatMessagesControl.lifeGoals[4].show
                                }],
                    tooComplex:  [{
                                    msg: "Kurz gesagt: Du verrätst mir deine Ziele, ich kümmere mich um den Rest!",
                                    loading: this.chatMessagesControl.tooComplex[0].loading,
                                    show: this.chatMessagesControl.tooComplex[0].show
                                },
                                {
                                    msg: "Berufliche Vorsorge, Säule 3a, 1e-Plan, Steuerabzüge, gestaffelter Bezug zwecks Steueroptimierung, optimaler Aktienanteil bestimmen.… Es ist nicht leicht, bei all den Möglichkeiten den Überblick zu behalten.",
                                    loading: this.chatMessagesControl.tooComplex[1].loading,
                                    show: this.chatMessagesControl.tooComplex[1].show
                                },
                                {
                                    msg: "Und selbst wenn, es gibt 1000 andere Dinge, die mehr Spass machen!",
                                    loading: this.chatMessagesControl.tooComplex[2].loading,
                                    show: this.chatMessagesControl.tooComplex[2].show
                                },
                                {
                                    msg: "Doch keine Sorge! Ich optimiere alles für dich – damit du mehr Zeit hast für die wirklich tollen Dinge im Leben.",
                                    loading: this.chatMessagesControl.tooComplex[3].loading,
                                    show: this.chatMessagesControl.tooComplex[3].show
                                }],
                    moreInfo:   [{
                                    msg: "Du willst dir ein tiefgründigeres Bild machen, bevor du eine Entscheidung treffen kannst. Das verstehe ich gut!",
                                    loading: this.chatMessagesControl.moreInfo[0].loading,
                                    show: this.chatMessagesControl.moreInfo[0].show
                                },
                                {
                                    msg: "Was möchtest du sonst noch wissen?",
                                    loading: this.chatMessagesControl.moreInfo[1].loading,
                                    show: this.chatMessagesControl.moreInfo[1].show
                                },
                                {
                                    msg: "Rechts findest du viele weitere gute Fragen, die ich gerne für dich beantworte",
                                    loading: this.chatMessagesControl.moreInfo[2].loading,
                                    show: this.chatMessagesControl.moreInfo[2].show
                                }],
                    getStarted: [{
                                    msg: this.formInline.user +", gib mir kurz einige Sekunden, um deine derzeitige finanzielle Situation zu analysieren…",
                                    loading: this.chatMessagesControl.getStarted[0].loading,
                                    show: this.chatMessagesControl.getStarted[0].show
                                },
                                {
                                    msg: "Alles klar! Hier dein Ergebnis:",
                                    loading: this.chatMessagesControl.getStarted[1].loading,
                                    show: this.chatMessagesControl.getStarted[1].show
                                },
                                {
                                    msg: "<strong>106'821 Franken</strong>: Das ist dein aktuelles Barvermögen auf deinem CS-Konto",
                                    loading: this.chatMessagesControl.getStarted[2].loading,
                                    show: this.chatMessagesControl.getStarted[2].show
                                },
                                {
                                    msg: "<strong>1487 Franken</strong>: Um diesen Betrag wächst dein CS-Kontostand durchschnittlich pro Monat (Sparbetrag)",
                                    loading: this.chatMessagesControl.getStarted[3].loading,
                                    show: this.chatMessagesControl.getStarted[3].show
                                },
                                {
                                    msg: "<strong>50'000 Franken</strong>: Das sind deine Schulden (Hypothek) bei der CS",
                                    loading: this.chatMessagesControl.getStarted[4].loading,
                                    show: this.chatMessagesControl.getStarted[4].show
                                },
                                {
                                    msg: "Stell dir vor, du wirst heute 65 und gehst in Pension. Wenn du vor 35 Jahren 70’000 Franken mit mir investiert hättest und dann bis heute monatlich 1200 Franken zusätzlich investiert hättest, so wäre dein Investment heute 2,6 Millionen wert. Auf dem Bankkonto wäre der gleiche Sparbetrag heute 0.68 Millionen wert…",
                                    loading: this.chatMessagesControl.getStarted[5].loading,
                                    show: this.chatMessagesControl.getStarted[5].show
                                },
                                {
                                    msg: "Wenn du magst, kannst du rechts mit den Zahlen rumspielen und schauen, wie sich das auf dein Investment auswirkt.",
                                    loading: this.chatMessagesControl.getStarted[6].loading,
                                    show: this.chatMessagesControl.getStarted[6].show
                                },
                                {
                                    msg: "Klick auf Weiter wenn du fertig bist, damit ich dir einige Fragen stellen kann.",
                                    loading: this.chatMessagesControl.getStarted[7].loading,
                                    show: this.chatMessagesControl.getStarted[7].show
                                }]
                }
            },
            getStartedChart() {
                return {
                    labels: this.getLabels(this.getStartedParameters.investmentHorizon, "years"),
                    datasets: [
                        
                        {
                            label: 'Sparkonto',
                            backgroundColor: 'rgb(255, 99, 132, 0.8)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: this.getChartData(this.getStartedParameters.investmentHorizon, this.getStartedParameters.initialInvestment, this.getStartedParameters.monthlyInvestment, 1.01, 1.01)
                        },
                        {
                            label: 'LunaInvest',
                            backgroundColor: 'rgb(99, 61, 252, 0.8)',
                            borderColor: 'rgb(99, 61, 252)',
                            data: this.getChartData(this.getStartedParameters.investmentHorizon, this.getStartedParameters.initialInvestment, this.getStartedParameters.monthlyInvestment, 1.02, 1.07)
                        }
                    ]
                }
            },
            portfolioChart() {
                return {
                    labels: [
                            'LunaGrowth',
                            'LunaConserve',
                        ],
                    datasets: [{
                        data: [100, 0],
                        backgroundColor: ['rgb(99, 61, 252)', 'rgb(254, 153, 99)']
                    }],               
                }
            },
            portfolioSimulation() {
                return {
                    labels: [
                            'LunaGrowth',
                            'LunaConserve',
                        ],
                    datasets: [{
                        data: [this.goalSimulation.proportion, 100 - this.goalSimulation.proportion],
                        backgroundColor: ['rgb(99, 61, 252)', 'rgb(254, 153, 99)']
                    }],               
                }
            },
            performanceSimulation() {
                return {
                    labels: this.getLabels(this.goalSimulation.investmentHorizon, "age"),
                    datasets: [
                        {
                            label: 'LunaInvest',
                            backgroundColor: 'rgb(99, 61, 252, 0.8)',
                            borderColor: 'rgb(99, 61, 252)',
                            data: this.getChartData(this.goalSimulation.investmentHorizon, this.goalSimulation.initialInvestment, this.goalSimulation.monthlyInvestment, 1.02,1.07, this.goalSimulation.proportion, this.goalSimulation.periodicIncrease)
                        }
                    ]
                }
            }
        },
        methods: {
            welcomePageHandleSubmit(name, password) {
                var self = this;
                this.$refs[name].validate((valid) => {
                    if (valid && password == 'luna') {
                        this.$Message.success('Success!');
                        this.activeView.welcome = 0;
                        setTimeout(function(){
                            self.activeView.overLay = 1;
                            self.activeView.hiThere = 1;
                            self.chat(self.chatMessagesControl.hiThere, 0)
                        },
                        4000);
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            chat(array, i) {
                var self = this;   
                if (i < array.length){
                    array[i].show = true;
                    array[i].loading = true;
                    setTimeout(function() {
                        array[i].loading = false;
                        if (!self.sound) {
                            snd.play();
                            self.sound = true;
                        }
                        self.chat(array, i+1);
                    }, 1500+1000*Math.random());
                } else {
                    return;
                }
            },
            play(event) {
                this.$refs.audioElm.play();
            },
            hiThereNext() {
                this.activeView.hiThere = 0;
                this.activeView.myService = 1;
                this.chat(this.chatMessagesControl.myService, 0);
            },
            myServiceNext() {
                this.activeView.myService = 0;
                this.activeView.lifeGoals = 1;
                this.chat(this.chatMessagesControl.lifeGoals, 0);
            },
            lifeGoalsNext() {
                this.activeView.lifeGoals = 0;
                this.activeView.tooComplex = 1;
                this.chat(this.chatMessagesControl.tooComplex, 0);
            },
            tooComplexNext() {
                this.activeView.tooComplex = 0;
                this.activeView.moreInfo = 1;
                this.chat(this.chatMessagesControl.moreInfo, 0);
            },
            justStart() {
                this.activeView.whiteOverlay = 1;
                this.activeView.overLay = 0;
                this.activeView.moreInfo = 0;
                this.activeView.tooComplex = 0;
                this.activeView.lifeGoals = 0;
                this.activeView.myService = 0;
                this.activeView.getStarted = 1;
                this.chat(this.chatMessagesControl.getStarted, 0);
            },
            getStartedNext() {
                this.activeView.getStarted = 0;
                this.activeView.questions = 1;
            },
            questionsNext() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.questions = 0;
                this.activeView.lessons = 1;
            },
            lessonsNext() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.lessons = 0;
                this.activeView.lessonOne = 1;
            },
            lessonOneNext() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.lessonOne = 0;
                this.activeView.lessonTwo = 1;
            },
            lessonTwoNext() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.lessonTwo = 0;
                this.activeView.lessonThree = 1;
            },
            lessonThreeNext() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.lessonThree = 0;
                this.activeView.lessonFour = 1;
            },
            lessonFourNext() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.lessonFour = 0;
                this.activeView.firstGoal = 1;
            },
            firstGoalNext() {
                var self = this;
                this.activeView.loadingDashboard = 1
                setTimeout(function(){
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    self.activeView.firstGoal = 0;
                    self.activeView.loadingDashboard = 0;
                    self.activeView.dashboard = 1;
                },
                4500);
            },
            editGoal() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.dashboard = 0;
                this.activeView.editGoal = 1;
            },
            setGoal() {
                this.goalSimulation.editing = false;
                this.monthlyInvestment.amount = this.goalSimulation.monthlyInvestment
            },
            setAmount_1() {
                var self = this;
                this.activeView.whiteOverlay = 0;
                this.activeView.setSavingAmountOverlay = 1;
                this.activeView.setAmount = 1;
                setTimeout(function(){
                    self.setAmountProgress();
                }, 300)
            },
            setAmount_2() {
                var self = this;
                this.activeView.setAmount = 0;
                this.activeView.pillar3a = 1;
                setTimeout(function(){
                    self.setAmountProgress();
                }, 300)
            },
            setAmount_3() {
                var self = this;
                this.activeView.pillar3a = 0;
                this.activeView.pillar3aResults = 1;
                this.monthlyInvestment.säule3a = (564 - this.answers.betrag3a).toString();
                setTimeout(function(){
                    self.setAmountProgress();
                }, 300)
            },
            setAmount_4() {
                var self = this;      
                this.activeView.pillar3aResults = 0;
                this.activeView.checkInputs = 1;
                setTimeout(function(){
                    self.setAmountProgress();
                }, 300)
            },
            setAmount_5() {
                this.activeView.setSavingAmountOverlay = 0;
                this.activeView.checkInputs = 0;
                this.activeView.whiteOverlay = 1;
                this.controls.setAmount.amountSet = true;
                this.monthlyInvestment.amountFinal = this.monthlyInvestment.amount;
            },
            toDashboard() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.activeView.dashboard = 1;
                this.activeView.editGoal = 0;
            },
            info () {
                this.$Message.info('Tut mir leid, diese Frage kann ich dir in der Demo nicht beantworten.');
            },
            notAnOption() {
                this.$Message.info('Tut mir leid, dieses Ziel kann in der Demo nicht gewählt werden. Bitte wähle das Ziel "Pensionierung" aus.');
            },
            notInDemo() {
                this.$Message.info('Tut mir leid, diese Funktion steht in der Demo nicht zur Verfügung');
            },
            getLabels(years, mode) {
                if (mode == "years"){
                    return Array.from(Array(years+1).keys())
                }
                if (mode == "age"){
                    return Array.from(new Array(years + 1), (x,i) => i + this.formInline.age)
                }
            },
            getChartData(years, initialInvestment, monthlyInvestment, ROI_min, ROI_max, portfolio = 100, dynamicInvestment = false) {
                var ROI = ROI_min + portfolio/100 * (ROI_max-ROI_min);
                var growthFactor = 1;
                var dynamic_monthlyInvestment = monthlyInvestment;
                if (dynamicInvestment == true) {
                    growthFactor = 1.02;
                }
                var wealth = [initialInvestment];
                for (var i = 0; i <= years; i++) {
                    wealth.push(Math.floor((wealth[wealth.length-1] + 12*dynamic_monthlyInvestment)*ROI));
                    dynamic_monthlyInvestment = dynamic_monthlyInvestment * growthFactor;
                }
                return wealth;
            },
            roundAndFormat(value) {
                var rounded = Math.round(value/1000)*1000; 
                return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            format(value) { 
                return value.toString().replace(/[ ]*,[ ]*|[ ]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            handleReachBottom() {
                this.controls.lessonFour.bottomReached = true;
            },
            handleScroll (event) {
                if (this.activeView.lessonFour == 1 && ($(window).scrollTop() + $(window).height() > $(document).height() - 10)) {
                    this.controls.lessonFour.bottomReached = true;
                }          
            },
            yearFormat (val) {
                return val + ' Jahre';
            },
            setAmountProgress() {
                this.controls.setAmount.progress += 1/4 * 100;
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    })
    

});