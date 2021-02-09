<template>
	<v-app>
		<v-app-bar
			app
			color="purple dark-1"
			dark
		>
			<div class="d-flex align-center">
				<v-toolbar-title>
					Jukebox
				</v-toolbar-title>
			</div>

			<v-spacer></v-spacer>

			<v-btn
				text
				:to='{name: "Home"}'
			>
				<span class="mr-2">Pessoas</span>
			</v-btn>

			<v-spacer></v-spacer>

			<v-btn
				link
				:to='{name: "Cadastrar"}'
				text
			>
				<span class="mr-2">Cadastrar</span>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
