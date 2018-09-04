<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="4">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Acesse sua conta</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="usuario" autocomplete="username" v-model="username" required />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="senha" autocomplete="current-password" v-model="password" required />
                  </b-input-group>
                  <b-alert variant="danger"
                          dismissible
                          :show="showAlert"
                          @dismissed="showAlert=false">
                    Senha ou login invalidos
                  </b-alert>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4" :disabled="isLoading" >{{isLoading?'Logando...':'Login'}}</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Esqueceu a senha?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:'',
      showAlert: false,
      isLoading: false
    }
  },
  methods:{
    login(){
      this.isLoading = true;
      this.showAlert = false;


      axios.post(`http://gd-back.local/api/v1/login`, {
        username: this.username,
        password: this.password
      })
      .then(response => {
        localStorage.setItem("coblueToken", response.data.token);
        
      })
      .catch(e => {
        this.showAlert = true;
      })
      .finally(() => { 
        this.isLoading = false;
      });
    }
  }
}
</script>
