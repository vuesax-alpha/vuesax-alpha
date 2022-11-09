<template>
  <div style="display: flex; gap: 30px;">
    <vs-avatar history loading size="60" badge badge-position="top-left">
      <img src="https://source.unsplash.com/random" alt="">  
    </vs-avatar>
    <vs-avatar danger history badge>
      <template #text>Think</template>
    </vs-avatar>
    <vs-avatar success history badge writing>
      <template #text>Think You</template>
    </vs-avatar>
    <vs-avatar warn flat>
      Heel
    </vs-avatar>
    <vs-avatar dark loading>
      <template #icons>
        <i class='bx bxl-facebook-square' ></i>
        <i class='bx bxl-github' ></i>
        <i class='bx bxl-twitter' ></i>
      </template>
      <img src="https://source.unsplash.com/random" alt="">  
    </vs-avatar>

    <vs-avatar-group max="5" float>
      <vs-avatar badge badge-position="top-left">
        <img src="https://source.unsplash.com/random" alt="">  
        <!-- <template #text>Think You</template> -->
      </vs-avatar>
      <vs-avatar success flat>
        <template #text>Hell</template>
      </vs-avatar> 
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
      <vs-avatar dark>
        <template #text>Think You</template>
        <!-- <img src="https://source.unsplash.com/random" alt="">   -->
      </vs-avatar>
      <vs-avatar danger>
        <img src="https://source.unsplash.com/random" alt="">  
        <!-- <template #text>Think You</template> -->
      </vs-avatar>
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
    </vs-avatar-group>
    <vs-avatar-group max="5">
      <vs-avatar badge badge-position="top-left">
        <img src="https://source.unsplash.com/random" alt="">  
        <!-- <template #text>Think You</template> -->
      </vs-avatar>
      <vs-avatar success flat>
        <template #text>Hell</template>
      </vs-avatar> 
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
      <vs-avatar dark>
        <template #text>Think You</template>
        <!-- <img src="https://source.unsplash.com/random" alt="">   -->
      </vs-avatar>
      <vs-avatar danger>
        <img src="https://source.unsplash.com/random" alt="">  
        <!-- <template #text>Think You</template> -->
      </vs-avatar>
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
      <vs-avatar>
        <template #text>Think You</template>
      </vs-avatar>
    </vs-avatar-group>
  </div>
</template>
