// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VsAlert: typeof import('vuesax-alpha')['VsAlert']
    VsAvatar: typeof import('vuesax-alpha')['VsAvatar']
    VsAvatarGroup: typeof import('vuesax-alpha')['VsAvatarGroup']
    // VsBadge             : typeof import('vuesax-alpha')['VsBadge']
    VsButton: typeof import('vuesax-alpha')['VsButton']
    VsButtonGroup: typeof import('vuesax-alpha')['VsButtonGroup']
    VsCard: typeof import('vuesax-alpha')['VsCard']
    VsCardGroup: typeof import('vuesax-alpha')['VsCardGroup']
    VsCheckbox: typeof import('vuesax-alpha')['VsCheckbox']
    VsCheckboxGroup: typeof import('vuesax-alpha')['VsCheckboxGroup']
    VsCol: typeof import('vuesax-alpha')['VsCol']
    VsCollapseTransition: typeof import('vuesax-alpha')['VsCollapseTransition']
    VsDialog: typeof import('vuesax-alpha')['VsDialog']
    VsInput: typeof import('vuesax-alpha')['VsInput']
    VsNavbar: typeof import('vuesax-alpha')['VsNavbar']
    VsNavbarItem: typeof import('vuesax-alpha')['VsNavbarItem']
    VsNavbarGroup: typeof import('vuesax-alpha')['VsNavbarGroup']
    VsOption: typeof import('vuesax-alpha')['VsOption']
    VsOptionGroup: typeof import('vuesax-alpha')['VsOptionGroup']
    VsPagination: typeof import('vuesax-alpha')['VsPagination']
    VsRate: typeof import('vuesax-alpha')['VsRate']
    // VsRadio             : typeof import('vuesax-alpha')['VsRadio']
    // VsRow               : typeof import('vuesax-alpha')['VsRow']
    VsSelect: typeof import('vuesax-alpha')['VsSelect']
    VsScrollbar: typeof import('vuesax-alpha')['VsScrollbar']
    // VsSwitch            : typeof import('vuesax-alpha')['VsSwitch']
    // VsTable             : typeof import('vuesax-alpha')['VsTable']
    VsTooltip: typeof import('vuesax-alpha')['VsTooltip']
  }

  // interface ComponentCustomProperties {}
  // $notify    : typeof import('vuesax-alpha')['VsNotification']
  // $loading   : typeof import('vuesax-alpha')['VsLoadingService']
  // }
}

export {}
