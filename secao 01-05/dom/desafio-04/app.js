new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		fonteClass: 'fonte',
		rotateClass: 'rotacao',
		class3: 'destaque',
		class4: '',
		cor: 'blue',
		valor: 00
	},
	methods: {
		iniciarEfeito () {
			setInterval(() => (
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			), 1000)
		},
		iniciarProgresso () {
			setInterval(() => (
				this.valor = this.valor < 100 ? this.valor++ : this.valor
				
			), 1000)
		},
		setClass(event){
			this.perigo = event.targe.value
		}
	}
})
