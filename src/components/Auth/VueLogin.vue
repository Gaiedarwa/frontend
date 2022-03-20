<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="#A8A19F">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-alert
              color="error"
              :value="error"
              icon="mdi-alert"
            >
              The username or the password are incorrect.
            </v-alert>
            <v-card-text>
              <v-text-field  prepend-icon="mdi-account" name="login" label="Login" type="text"></v-text-field>

              <v-text-field v-model="password" prepend-icon="mdi-lock" name="password" label="Password" type="password"></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
               <v-spacer></v-spacer>
              <v-btn to="/signup" round color="indigo" dark>Sign up</v-btn>
             
              <v-btn round color="green" dark>
                Login
                <v-icon></v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "VueSignup",
  data: () => ({
    userExists: false,
    username: '', 
    email: '',
    password: "",
    confirm_password: "",
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    valid(){

    }
    }
    };
    </script>