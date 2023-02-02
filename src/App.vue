<template>
  <NavBar />
  <router-view/>
  <!-- <div class="container mt-3">
    <div class="grid" >
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias et, impedit ex quam vel beatae voluptatum, assumenda incidunt, quis hic quas asperiores provident nihil cupiditate porro fuga nulla facere veritatis!</p>
        </div> 
      </div>
    </div> -->
    <!-- <CustomerView name="Raja" age="25" designation="Software Engineer"/>

    <Employee/> -->
    <!-- <Counter/> -->
    <!-- <GreetingComp/> -->
    <!-- <RegisterComp/> -->
    <!-- <AuthUser/> -->
    <!-- <AuthUser/> -->
    <!-- <UserList/> -->
  <!-- </div> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
// import AuthUser from './components/AuthUser.vue';
// import UserList from './components/UserList.vue';

// import CustomerView from "@/components/CustomerView.vue";
// import Employee from "@/components/Employee.vue";

// import RegisterComp from './components/RegisterComp.vue';

//import Counter from "./components/Counter";
export default{
    //name:"CustomerView",
    //components: {AuthUser, UserList}
    // RegisterComp
    
    components: {NavBar  }
}
</script>

<style>
@import "./style.css";
</style>

