const App = new Vue({
    el:'#App',
    data:{
        text:'hello',
        contador:0
    },
    computed:{
        reverseText(){
            return this.text.split('').reverse().join('');
        },
        color(){
            return {
                'bg-danger': this.contador <=10,
                'bg-warning': this.contador >10 && this.contador <= 30,
                'bg-success': this.contador >30 ,
            }
        }

    }

})
