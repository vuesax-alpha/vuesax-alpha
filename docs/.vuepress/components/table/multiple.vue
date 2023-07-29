<template>
  <div class="center">
    <vs-table v-model="selected" multiple>
      <template #header>
        <vs-input
          v-model="search"
          block
          type="url"
          input-style="border"
          placeholder="Search"
        />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :checked-force="selected.length > 0"
              :indeterminate="selected.length < users.length"
              @change="selected = toggleSelectAll(selected, getSearch)"
            />
          </vs-th>
          <vs-th> Name </vs-th>
          <vs-th> Email </vs-th>
          <vs-th> Id </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr v-for="(tr, i) in users" :key="i" :data="tr">
          <vs-td checkbox>
            <vs-checkbox v-model="selected" :value="tr" />
          </vs-td>
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <span class="data-table">
      <pre>
        {{ selected.length > 0 ? selected : 'Select an item in the table' }}
      </pre>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { toggleSelectAll } from 'vuesax-alpha'

type User = {
  id: number | string
  name: string
  username: string
  email: string
  website: string
}

const search = ref('')
const selected = ref<User[]>([])
const users = ref<User[]>([
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net',
  },
])

const getSearch = computed(() => {
  return users.value.filter((e) =>
    e.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style lang="scss" scoped>
.data-table {
  background: rgba(0, 0, 0, 0.03);
  padding: 10px;
  border-radius: 18px;
  margin-top: 20px;
  font-size: 0.9rem;
  width: 100%;
  max-height: 360px;
  overflow: auto;
  pre {
    background: transparent;
    padding: 0px 10px;
    overflow: hidden;
  }
}
</style>
