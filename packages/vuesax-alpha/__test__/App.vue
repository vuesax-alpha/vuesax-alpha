<script setup lang="ts">
import { reactive, ref } from "vue";
import Alert from "./Alert.vue";
import Avatar from "./Avatar.vue";
import Button from "./Button.vue";
import Switch from "./Switch.vue";
import Checkbox from "./Checkbox.vue";
import Radio from "./Radio.vue";
import Pagination from "./Pagination.vue";
import Tooltip from "./Tooltip.vue";
import Select from "./Select.vue";
import Scrollbar from "./Scrollbar.vue";
import Notification from "./Notification.vue";
import Input from "./Input.vue";
import Card from "./Card.vue";
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import Table from "./Table.vue";
import Dialog from "./Dialog.vue";
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
