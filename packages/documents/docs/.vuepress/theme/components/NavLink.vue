<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact || $route.path.indexOf('/guide/') !== -1 && navItem.text === 'Documentation' || navItem.text === 'Button'"
  >
  {{ navItem.text }}
    <i class="bx bx-chevron-down"></i>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isLinkMailto(link) || isLinkTel(link) ? undefined : '_blank'"
    :rel="isLinkMailto(link) || isLinkTel(link) ? undefined : 'noopener noreferrer'"
  >
    {{ navItem.text }}
    <!-- <OutboundLink/> -->
  </a>
</template>

<script lang="ts" setup>
import { useSiteData } from '@vuepress/client';
import { isLinkMailto, isLinkTel } from '@vuepress/shared';
import { computed } from 'vue';
import { NavbarItem } from 'vuepress-vite';
import { isExternal, ensureExt } from '../util';

const props = defineProps<{ navItem: NavbarItem }>();

const siteData = useSiteData();

const link = computed(() => {
  return ensureExt(props.navItem.link)
});

const exact = computed(() => {
  if (siteData.value.locales) {
    return Object.keys(siteData.value.locales).some(rootLink => rootLink === link.value)
  }
  return link.value === '/'
});
  
</script>

<style lang="scss">
.nav-item {
	i {
		&.bx {
			&:not(.bx-dots-horizontal-rounded) {
				display: none;
			}
			&.not-remove {
				display: block !important;
			}
		}
	}
	& > div {
		& > .nav-link {
			display: flex !important;
			align-items: center;
			justify-content: center;
			i {
				&.bx {
					display: block;
					font-size: 1rem;
					transition: all 0.2s ease;
					transform-origin: center;
					width: 16px;
					height: 16px;
					position: relative;
				}
			}
		}
	}
}

</style>
