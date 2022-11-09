<script lang="ts">
import { defineComponent } from "vue";
import { getColor } from "@/util/index";

export type ColorType = 
  | "primary"
  | "succcess"
  | "danger"
  | "warn"
  | "dark"
  | string;

export default defineComponent({
  props: {
    color: {
      type: String,
      default: null,
    },
    danger: Boolean,
    success: Boolean,
    warn: Boolean,
    dark: Boolean,
    primary: Boolean,
    active: Boolean,
  },
  data: () => ({
    componentColor: '',
  }),
  computed: {
    isColorDark(): boolean {
      return (
        this.color === "dark" || this.dark || this.componentColor === "dark"
      );
    },
    isColor(): boolean {
      return (
        !!this.color ||
        !!this.primary ||
        !!this.success ||
        !!this.warn ||
        !!this.danger ||
        !!this.dark
      );
    },
    getColor() {
      return getColor(this.color);
    }
  },
});
</script>
