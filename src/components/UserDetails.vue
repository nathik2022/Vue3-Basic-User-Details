<template>
    <div class="container mt-3">
        <div v-if="loading" class="row">
            <SpinnerGif/>
        </div>
        <div v-if="!loading && Object.keys(user).length > 0" class="row">
            <div class="col">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                Name : <span class="fst-italic fw-bold">{{ user.name }}</span>
                            </li>
                            <li class="list-group-item">
                                Id : <span class="fst-italic fw-bold">{{ this.user.id }}</span>
                            </li>
                            <li class="list-group-item">
                                Username: <span class="fst-italic fw-bold">{{ this.user.username }}</span>
                            </li>
                            <li class="list-group-item">
                                E-mail : <span class="fst-italic fw-bold">{{ this.user.email }}</span>
                            </li>
                            <li class="list-group-item">
                                Address : <span class="fst-italic fw-bold">{{ this.user.address.street}} ,{{ this.user.address.suite}} ,{{ this.user.address.city}} ,{{ this.user.address.zipcode}}.</span>
                            </li>
                            <li class="list-group-item">
                                Phone : <span class="fst-italic fw-bold">{{ this.user.phone }}</span>
                            </li>
                            <li class="list-group-item">
                                Website : <span class="fst-italic fw-bold">{{ this.user.website }}</span>
                            </li>
                            <li class="list-group-item">
                                Company : <span class="fst-italic fw-bold">{{ this.user.company.name }} <!--, {{ this.user.company.catchPhrase}}, {{ this.user.company.bs}}.--></span> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="errorMessage" class="row">
            <div class="col">
                <p  class="fw-bold text-danger">{{ errorMessage }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link class="btn btn-success ms-3 mt-3" to="/users">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { UserService } from '@/services/UserService';
import SpinnerGif from './SpinnerGif.vue';
export default {
    components: {SpinnerGif},
    name:"UserDetails",
    data: function () {
        return {
            loading: false,
            user: {},
            errorMessage: null,
        }     
    },
    created : async function(){
        let userId = this.$route.params.userId;
        try {
            this.loading = true;
            let response = await UserService.getUser(userId);
            this.loading = false;
            this.user = response.data;
        } catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    }
}
</script>

<style>

</style>