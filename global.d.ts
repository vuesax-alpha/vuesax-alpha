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
    VsIcon: typeof import('vuesax-alpha')['VsIcon']
    VsInput: typeof import('vuesax-alpha')['VsInput']
    VsInputNumber: typeof import('vuesax-alpha')['VsInputNumber']
    VsNavbar: typeof import('vuesax-alpha')['VsNavbar']
    VsNavbarItem: typeof import('vuesax-alpha')['VsNavbarItem']
    VsNavbarGroup: typeof import('vuesax-alpha')['VsNavbarGroup']
    VsOption: typeof import('vuesax-alpha')['VsOption']
    VsOptionGroup: typeof import('vuesax-alpha')['VsOptionGroup']
    VsPagination: typeof import('vuesax-alpha')['VsPagination']
    VsPopconfirm: typeof import('vuesax-alpha')['VsPopconfirm']
    VsPopper: typeof import('vuesax-alpha')['VsPopper']
    VsRate: typeof import('vuesax-alpha')['VsRate']
    VsRadio: typeof import('vuesax-alpha')['VsRadio']
    VsRow: typeof import('vuesax-alpha')['VsRow']
    VsSelect: typeof import('vuesax-alpha')['VsSelect']
    VsScrollbar: typeof import('vuesax-alpha')['VsScrollbar']
    VsSwitch: typeof import('vuesax-alpha')['VsSwitch']
    VsSidebar: typeof import('vuesax-alpha')['VsSidebar']
    VsSidebarGroup: typeof import('vuesax-alpha')['VsSidebarGroup']
    VsSidebarItem: typeof import('vuesax-alpha')['VsSidebarItem']
    VsTable: typeof import('vuesax-alpha')['VsTable']
    VsTh: typeof import('vuesax-alpha')['VsTh']
    VsTd: typeof import('vuesax-alpha')['VsTd']
    VsTr: typeof import('vuesax-alpha')['VsTr']
    VsTimeSelect: typeof import('vuesax-alpha')['VsTimeSelect']
    VsTooltip: typeof import('vuesax-alpha')['VsTooltip']
  }

  interface ComponentCustomProperties {
    $notification: typeof import('vuesax-alpha')['VsNotification']
    $loading: typeof import('vuesax-alpha')['VsLoadingFn']
  }
}

export {}
