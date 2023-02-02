<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <p class="h3">Employee</p>
            <ul class="list-group">
                <li class="list-group-item">
                    Name: {{ this.employee.name }}
                </li>
                <li class="list-group-item">
                    Age: {{ this.employee.age }}
                </li>
                <li class="list-group-item">
                    Designation: {{ this.employee.designation }}
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name:"EmployeeComp",
 data: function(){
    return {
        employee: {
            name : 'Rajan1',
            age : 26,
            designation: 'Software Engineer'
        }
    }
 }
}
</script>

<style>

</style>