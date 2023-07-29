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
          <vs-th sort @click="users = sortData($event, users, 'name')">
            Name
          </vs-th>
          <vs-th sort @click="users = sortData($event, users, 'email')">
            Email
          </vs-th>
          <vs-th sort @click="users = sortData($event, users, 'id')">
            Id
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          v-for="(tr, i) in getPage(getSearch, page, pageSize)"
          :key="i"
          :data="tr"
          not-click-selected
          open-expand-only-td
        >
          <vs-td checkbox>
            <vs-checkbox v-model="selected" :value="tr" />
          </vs-td>
          <vs-td
            edit
            @click=";(edit = tr), (editProp = 'name'), (editActive = true)"
          >
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.id }}
          </vs-td>

          <template #expand>
            <div class="con-content">
              <div>
                <vs-avatar>
                  <img :src="`/avatars/avatar-${i + 1}.png`" alt="" />
                </vs-avatar>
                <p>
                  {{ tr.name }}
                </p>
              </div>
              <div>
                <vs-button type="flat" icon>
                  <i class="bx bx-lock-open-alt" />
                </vs-button>
                <vs-button type="flat" icon> Send Email </vs-button>
                <vs-button type="border" color="danger">
                  Remove User
                </vs-button>
              </div>
            </div>
          </template>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination
          v-model:current-page="page"
          v-model:page-size="pageSize"
          :page-sizes="[3, 5, 7]"
          :total="getSearch.length"
          progress
          infinite
        />
      </template>
    </vs-table>

    <vs-dialog v-model="editActive">
      <template #header> Change Prop {{ editProp }} </template>
      <vs-input
        v-if="editProp == 'email'"
        v-model="edit[editProp]"
        @keypress.enter="editActive = false"
      />
      <vs-select
        v-if="editProp == 'name'"
        v-model="edit[editProp]"
        block
        placeholder="Select"
        @change="editActive = false"
      >
        <vs-option label="Vuesax" value="Vuesax"> Vuesax </vs-option>
        <vs-option label="Vue" value="Vuejs"> Vue </vs-option>
        <vs-option label="Javascript" value="Javascript">
          Javascript
        </vs-option>
        <vs-option disabled label="Sass" value="Sass"> Sass </vs-option>
        <vs-option label="Typescript" value="Typescript">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="Webpack"> Webpack </vs-option>
        <vs-option label="Nodejs" value="Nodejs"> Nodejs </vs-option>
      </vs-select>
    </vs-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { getPage, sortData, toggleSelectAll } from 'vuesax-alpha'

type User = {
  id: number | string
  name: string
  username: string
  email: string
  website: string
}

const editActive = ref(false)
const edit = ref<Pick<User, 'name' | 'email'>>({ name: '', email: '' })
const editProp = ref<keyof typeof edit.value>()
const search = ref('')
const page = ref(1)
const pageSize = ref(4)
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
.con-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin-left: 10px;
    }
  }
}
</style>
