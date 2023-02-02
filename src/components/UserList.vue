<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 fw-bold text-success">User List</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda sequi unde, minima ad quisquam expedita, rerum eligendi eveniet incidunt officia ullam aliquam ipsam hic soluta beatae atque, quam non.</p>
            </div>
        </div>
        <div v-if="loading" class="row">
            <spinner-gif></spinner-gif>      
        </div>
        <div v-if="errorMessage" class="row">
            <p  class="fw-bold text-danger">
                {{errorMessage}}
            </p>
        </div>
        <div v-if="!loading && users.length > 0" class="row" >
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-success text-white">
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Website</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>
                                <router-link class="text-decoration-none fw-bold text-success" :to="'/users/'+user.id" >{{ user.name }}</router-link>
                            </td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.company.name }}</td>
                            <td>{{ user.website }}</td>
                            <td>{{ user.address.city }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { UserService } from '@/services/UserService';
import SpinnerGif from './SpinnerGif.vue';

export default {
    components: { SpinnerGif },
    name: "UserList",
    data: function(){
        return{
            // users: UserService.getAllUsers()
            loading: false,
            users:[],
            errorMessage: null,
        }
    },
    created: async function(){
        try{
            this.loading = true;
            let response = await UserService.getAllUsers();
            this.loading = false;
            this.users = response.data;
            // console.log(response.data);
        }catch(error){
            this.loading = false;
            this.errorMessage = error;
            // console.log(error);
        }
    }
}
</script>

<style>

</style>