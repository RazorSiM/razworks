<template>
  <div>{{ $page.keycapProject.title }}</div>
</template>
<page-query>
query keycap ($path: String!) {
  keycap: keycap (path: $path) {
    title,
    content
  }
}
</page-query>
