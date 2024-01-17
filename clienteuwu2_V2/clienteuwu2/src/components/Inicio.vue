<template>
    <div>
<b-container>
  <b-breadcrumb :items="items"></b-breadcrumb>

</b-container>
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '#',
            to: { name: 'tercero' }
          },
           {
            text: 'Main',
            to: { name: 'main' }
           },
           {
             text: 'Inicio',
             active: true   
             //aqui este active es simplemente en donde me encuentro 
          }
        ]
      }
    }
  }
</script>