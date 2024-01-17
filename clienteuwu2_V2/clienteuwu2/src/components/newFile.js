/* __placeholder__ */
export default (await import('vue')).defineComponent({
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
};
}
});
