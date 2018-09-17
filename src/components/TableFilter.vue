<template>
	<b-row>
		<b-col md="6" lg="2">
			<b-form-group >
				<label for="rows">Rows</label>
				<b-form-select id="rows"
					:plain="true"
					:options="[5,10,25,50,100,250,500]"
					value="50">
				</b-form-select>
			</b-form-group>
		</b-col>
		<b-col md="6" lg="2">
			<b-form-group >
				<label for="columns">ColVis</label>
				<b-form-select id="columns"
					:plain="true"
					:options="columns"
					value="name" >
				</b-form-select>
			</b-form-group>
		</b-col>
		<b-col md="10" lg="6">
			<label for="columns">Search</label>
			<b-input-group>
				<b-input-group-prepend>
					<b-button variant="default">
						<i class="fa fa-search"></i> Search
					</b-button>
				</b-input-group-prepend>
				<b-form-input type="text" placeholder="Search"></b-form-input>
			</b-input-group>
		</b-col>
		<b-col md="2" lg="2" class="actions_dropdown">
			<b-dropdown id="ddown1" text="Actions" class="m-2">
				<b-dropdown-item @click="create"><i class="fa fa-plus"></i>&nbsp; Create</b-dropdown-item>
				<b-dropdown-item><i class="fa fa-file-excel-o"></i>&nbsp; Excel</b-dropdown-item>
			</b-dropdown>
		</b-col>
	</b-row>
</template>

<script>
export default {
  name: 'TableFilter',
  data: function () {
    return {
			show: true,
			columns: [
				'id',
				'name',
				'username',
				'gender',
				'birth_date',
				'civil_state',
				'email',
				'language',
				'picture',
				'role_name'
			]

    }
	},
	methods: {
		create () {
			console.log("Teste");
		}
	}
}
</script>

<style scoped>
	.actions_dropdown {
		margin-top: 20px;
	}
</style>
