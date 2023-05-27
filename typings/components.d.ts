// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VsAlert: typeof import('../packages/vuesax-alpha')['VsAlert']
    VsAvatar: typeof import('../packages/vuesax-alpha')['VsAvatar']
    VsAvatarGroup: typeof import('../packages/vuesax-alpha')['VsAvatarGroup']
    // VsBadge: typeof import('../packages/vuesax-alpha')['VsBadge']
    VsButton: typeof import('../packages/vuesax-alpha')['VsButton']
    VsButtonGroup: typeof import('../packages/vuesax-alpha')['VsButtonGroup']
    VsCard: typeof import('../packages/vuesax-alpha')['VsCard']
    VsCardGroup: typeof import('../packages/vuesax-alpha')['VsCardGroup']
    VsCheckbox: typeof import('../packages/vuesax-alpha')['VsCheckbox']
    VsCheckboxGroup: typeof import('../packages/vuesax-alpha')['VsCheckboxGroup']
    VsCol: typeof import('../packages/vuesax-alpha')['VsCol']
    VsCollapseTransition: typeof import('../packages/vuesax-alpha')['VsCollapseTransition']
    VsDialog: typeof import('../packages/vuesax-alpha')['VsDialog']
    VsIcon: typeof import('../packages/vuesax-alpha')['VsIcon']
    VsInput: typeof import('../packages/vuesax-alpha')['VsInput']
    VsNavbar: typeof import('../packages/vuesax-alpha')['VsNavbar']
    VsNavbarItem: typeof import('../packages/vuesax-alpha')['VsNavbarItem']
    VsNavbarGroup: typeof import('../packages/vuesax-alpha')['VsNavbarGroup']
    VsOption: typeof import('../packages/vuesax-alpha')['VsOption']
    VsOptionGroup: typeof import('../packages/vuesax-alpha')['VsOptionGroup']
    VsPagination: typeof import('../packages/vuesax-alpha')['VsPagination']
    VsPopper: typeof import('../packages/vuesax-alpha')['VsPopper']
    VsRate: typeof import('../packages/vuesax-alpha')['VsRate']
    // VsRadio: typeof import('../packages/vuesax-alpha')['VsRadio']
    // VsRow: typeof import('../packages/vuesax-alpha')['VsRow']
    VsScrollbar: typeof import('../packages/vuesax-alpha')['VsScrollbar']
    VsSelect: typeof import('../packages/vuesax-alpha')['VsSelect']
    VsSwitch: typeof import('../packages/vuesax-alpha')['VsSwitch']
    // VsTable: typeof import('../packages/vuesax-alpha')['VsTable']
    VsTimeSelect: typeof import('../packages/vuesax-alpha')['VsTimeSelect']
    VsTooltip: typeof import('../packages/vuesax-alpha')['VsTooltip']
  }

  // interface ComponentCustomProperties {
  // $notify: typeof import('../packages/vuesax-alpha')['VsNotification']
  // $loading: typeof import('../packages/vuesax-alpha')['VsLoadingService']
  // }
}

export {}
