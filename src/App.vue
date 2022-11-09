<script setup lang="ts">
import { reactive, ref } from "vue";
import loading from "./test";
import Alert from "./__test__/Alert.vue";
import Avatar from "./__test__/Avatar.vue";
import Button from "./__test__/Button.vue";
import Switch from "./__test__/Switch.vue";
import Checkbox from "./__test__/Checkbox.vue";
import Radio from "./__test__/Radio.vue";
import Pagination from "./__test__/Pagination.vue";
import Tooltip from "./__test__/Tooltip.vue";
import Select from "./__test__/Select.vue";
import Scrollbar from "./__test__/Scrollbar.vue";
import Notification from "./__test__/Notification.vue";
import Input from "./__test__/Input.vue";
import Card from "./__test__/Card.vue";
import Sidebar from "./__test__/Sidebar.vue";
import Navbar from "./__test__/Navbar.vue";
import Table from "./__test__/Table.vue";
import Dialog from "./__test__/Dialog.vue";
// loading({});

const log = console.log.bind(console);
</script>

<template>
  <div class="container">
    <Notification />
    <Alert />
    <Avatar />
    <Button />
    <Switch />
    <Checkbox />
    <Radio />
    <Pagination />
    <Tooltip />
    <Select />
    <Scrollbar />
    <Input />
    <Card />
    
    <Sidebar />

    <Navbar />

    <Table />
    
    <Dialog />
    <!--  -->
  </div>
</template>

<style lang="scss">
.container {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px auto;
}
</style>
