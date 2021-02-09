<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Telefone
          </th>
          <th class="text-left">
            Tipo
          </th>
          <th class="text-left">
            Documento
          </th>
          <th class="text-left">
            Opções
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(pessoa, id) in pessoas" 
          :key="id"
        >
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.email }}</td>
          <td>{{ pessoa.telefone | VMask('(##) ####-#####') }}</td>
          <td>{{ pessoa.tipo }}</td>
          <td>{{ pessoa.documento}}</td>
          <td>
          <v-btn-toggle>
            <v-btn
              icon
              color="purple dark-1"
              small
              link
              :to='{name: "Editar", params: {id: id}}'
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
              icon
              color="purple dark-1"
              small
              @click.prevent="excluir(id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-btn-toggle>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    name: 'wb-grid',

    props: [
      "data"
    ],

    computed: {
      pessoas(){
        let data = []

        this.data.forEach(element => {
          let pessoa = {
            nome: element.nome + ' ' + element.sobrenome,
            email: element.email,
            telefone: element.telefone,
            tipo: element.pessoa_juridica === false ? 'Fisica' : 'Juridica',
            documento: element.pessoa_juridica === false ? element.cpf : element.cnpj
          }
          data.push(pessoa)
        });

        return data
      }
    },

    methods: {
      excluir: function(id){
        this.$store.dispatch('DELETAR_PESSOA', id)
      }
    }
  }
</script>
