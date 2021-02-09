<template>
	<v-container>
		<v-form
			ref="form"
			v-model="formValid"
			lazy-validation
		>
			<v-alert
				v-model="alert.show"
				dismissible
				color="pink dark-1"
				border="left"
				elevation="2"
				colored-border
				transition="scale-transition"
			>
				{{alert.text}}
			</v-alert>

			<v-text-field
				label="Nome *"
				required
				color="purple dark-1"
				v-model="pessoa.nome"
				:rules="nomeRules"
			></v-text-field>
			<v-text-field
				label="Sobre nome *"
				required
				color="purple dark-1"
				v-model="pessoa.sobrenome"
				:rules="sobreNomeRules"
			></v-text-field>
			<v-text-field
				label="Email *"
				required
				color="purple dark-1"
				v-model="pessoa.email"
				:rules="emailRules"
			></v-text-field>
			<v-text-field
				label="Telefone *"
				required
				color="purple dark-1"
				v-model="pessoa.telefone"
                v-mask="'(##) ####-#####'"
				:rules="telefoneRules"
			></v-text-field>
            <v-select
                :items="pessoa_tipos"
                color="purple dark-1"
                v-model="pessoa.pessoa_juridica"
                label="Pessoa "
            ></v-select>

			<v-text-field
				label="CPF *"
				required
				color="purple dark-1"
				v-model="pessoa.cpf"
				v-if="mostrarPessoaFisica == false"
				v-mask="'###.###.###-##'"
				:rules="cpfCnpjRules"
			></v-text-field>

			<v-text-field
				label="CNPJ *"
				required
				color="purple dark-1"
				v-model="pessoa.cnpj"
				v-else-if="mostrarPessoaFisica == true"
				v-mask="'###.###.###-##/####-#'"
				:rules="cpfCnpjRules"
			></v-text-field>

            <v-btn
                color="purple darken-1"
                dark
                block
                @click.prevent="novaPessoa()"
            >
                Salvar
            </v-btn>
		</v-form>
	</v-container>
</template>
<script>
	export default {
		name: 'vwCadastro',
		data(){
			return {
				formValid: true,
				pessoa: {
					nome: null,
					sobrenome: null,
					email: null,
					telefone: null,
					pessoa_juridica: false,
					cpf: null,
					cnpj: null
				},

				mostrarPessoaFisica: false,

				pessoa_tipos: [
					{
						text: 'Fisica',
						value: false
					},
					{
						text: 'Juridica',
						value: true
					}
				],

				alert: {
					text: '',
					show: false,
                    type: 'pink dark-1'
				},

				nomeRules: [
					value => !!value || 'O nome é necessário.'
				],

				sobreNomeRules: [
					value => !!value || 'O sobre nome é necessário.'
				],

				emailRules: [
					value => !!value || 'O nome é necessário.',
					value => /.+@.+\..+/.test(value) || 'O e-mail não é válido'
				],

				telefoneRules: [
					value => !!value || 'O telefone é necessário.'
				],

				cpfCnpjRules: [
					value => !!value || 'O telefone é necessário.',
					value => (value && value.length >= 14) || 'Documento inválido.'
				]
			}
		},
		computed: {
			pessoa_tipo(){
				return this.pessoa.pessoa_juridica
			}
		},
		watch: {
			// eslint-disable-next-line
			pessoa_tipo: function(novoValor){
				this.mostrarPessoaFisica = novoValor
			}
		},
		methods: {
			novaPessoa: function(){
				this.$store.dispatch('NOVA_PESSOA', this.pessoa)
				
				this.alert = {
					text: 'Pessoa cadastrada com sucesso.',
					show: true,
                    type: 'purple dark-1'
				}
			}
		}
	}
</script>
