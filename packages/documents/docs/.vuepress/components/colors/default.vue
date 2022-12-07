<template>
  <div class="center colors">
    <div class="primary">
      Primary
    </div>
    <div class="success">
      Success
    </div>
    <div class="danger">
      Danger
    </div>
    <div class="warn">
      Warn
    </div>
    <div class="dark">
      Dark
    </div>
  </div>
</template>

<style scoped lang="scss">
@function -color($color, $alpha: 1) {
  @return unquote("rgba(var(--vs-#{$color}), #{$alpha})");
}
.colors {
	padding-bottom: 50px;
	div {
		color: #fff;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		margin: 10px;
		border-radius: 6px 20px 20px 20px;
		transition: all 0.25s ease;
		cursor: default;
		&.primary {
			box-shadow: 0px 20px 35px -10px -color('primary', 0.5);
			background: -color('primary');
			&:hover {
				box-shadow: 0px 0px 0px 0px -color('primary', 0.5);
			}
		}
		&.success {
			box-shadow: 0px 20px 35px -10px -color('success', 0.5);
			background: -color('success');
			&:hover {
				box-shadow: 0px 0px 0px 0px -color('success', 0.5);
			}
		}
		&.danger {
			box-shadow: 0px 20px 35px -10px -color('danger', 0.5);
			background: -color('danger');
			&:hover {
				box-shadow: 0px 0px 0px 0px -color('danger', 0.5);
			}
		}
		&.warn {
			box-shadow: 0px 20px 35px -10px -color('warn', 0.5);
			background: -color('warn');
			&:hover {
				box-shadow: 0px 0px 0px 0px -color('warn', 0.5);
			}
		}
		&.dark {
			box-shadow: 0px 20px 35px -10px -color('dark', 0.5);
			background: -color('dark');
			&:hover {
				box-shadow: 0px 0px 0px 0px -color('dark', 0.5);
			}
		}
		&:hover {
			transform: translate(0, 5px);
		}
	}
}

</style>
