<template>
    <div>
        <Head>
            <Title>About page</Title>
        </Head>
        <p>{{ $t('welcome') }}</p>
<h1>About</h1>
<table class="table">
    <thead>
       <tr>
        <th>ID</th>
        <th>title</th>
        <th>Body</th>
    </tr> 
    </thead>
    
<tbody>


<tr v-for="post in posts" :key="post.id">
    <td>{{post.id}}</td>
    <td>{{post.title}}</td>
    <td>{{post.body}}</td>
</tr></tbody>
</table>
    </div>
</template>

<script setup>

const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts');

</script>

<style lang="scss" scoped>

</style>
