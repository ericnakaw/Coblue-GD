<template>
	<b-form @submit.prevent="onSubmit">
  	<b-card>
			<div slot="header">
				<strong>Create User</strong>
			</div>
			<b-card-body>
				<b-row>
					<b-col sm="12" md="4">
						<b-form-group>
							<label for="name">Name</label>
							<b-form-input type="text" id="name" placeholder="Enter your name" v-model="user.name"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col sm="12" md="4">
						<b-form-group>
							<label for="email">E-mail</label>
							<b-form-input type="text" id="email" placeholder="Enter your e-mail" v-model="user.email"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col sm="12" md="4">
						<b-form-group >
							<label for="role">Role</label>
							<b-form-select id="role"
								:plain="true"
								:options="roles"
								v-model="user.role_id">
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="12" md="4">
						<b-form-group>
							<label for="username">Username</label>
							<b-form-input type="text" id="username" placeholder="Enter your username" v-model="user.username"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col sm="12" md="4">
						<b-form-group>
							<label for="birth_date">Birth Date</label>
							<b-form-input type="date" id="birth_date" placeholder="Enter your birth date" v-model="user.birth_date"></b-form-input>
						</b-form-group>
					</b-col>
					<b-col sm="12" md="4">
						<b-form-group >
							<label for="civil_state">Civil State</label>
							<b-form-select id="civil_state"
								:plain="true"
								:options="civilStates"
								v-model="user.civil_state">
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col sm="12" md="4">
						<b-form-group
								label="Gender"
								label-for="gender">
								<b-form-radio-group id="gender"
									:plain="true"
									:options="[
										{value: 'male', text: 'Male'},
										{value: 'female', text: 'Female'},
									]"
									checked="2"
									stacked
									v-model="user.gender">
								</b-form-radio-group>
							</b-form-group>
					</b-col>
					<b-col sm="12" md="4">
						<b-form-group >
							<label for="language">Language</label>
							<b-form-select id="language"
								:plain="true"
								:options="languages"
								v-model="user.language">
							</b-form-select>
						</b-form-group>
					</b-col>
				</b-row>
			</b-card-body>
			<div slot="footer">
				<b-button type="submit" size="sm" variant="primary"><i class="fa fa-save "></i> Submit</b-button>
			</div>
	</b-card>
	</b-form>
</template>

<script>
import api from '@/api';
export default {
  name: 'UserForm',
  created() {
    this.getRoles()
  },
  data() {
    return {
      user: {
        role_id: '',
        name: '',
        email: '',
        username: '',
        password: '',
        picture: '',
        birth_date: '',
        civil_state: '',
        gender: '',
        language: ''
      },
      currentUser: {},
      roles: [{
        value: null,
        text: 'Please select a role'
      }],
      civilStates: [{
          value: null,
          text: 'Please select one civil state'
        },
        {
          value: 'single',
          text: 'Single'
        },
        {
          value: 'married',
          text: 'Married'
        },
        {
          value: 'fiance',
          text: 'Fiance'
        },
        {
          value: 'divorced',
          text: 'Divorced'
        },
        {
          value: 'widow',
          text: 'Widow'
        }
      ],
      languages: [{
          value: null,
          text: 'Please select one language'
        },
        {
          value: 'pt_BR',
          text: 'Brazil Portuguese'
        },
        {
          value: 'en',
          text: 'English'
        }
      ],
    }
  },
  methods: {
    getRoles() {
      api.get('/roles')
        .then(response => {
          for (let i = 0; i < response.data.data.length; i++) {
            this.roles.push({
              value: response.data.data[i].id,
              text: response.data.data[i].name
            })
          }
        })
    },
    onSubmit() {
      api.post('/users', this.user)
        .then(response => {
          this.$router.push('/administration/users')
        })
        .catch(e => {
          console.log(e)
				})
				.finally(() => { 
					console.log()
				})
    }
  }
}
</script>

<style scoped>

</style>
