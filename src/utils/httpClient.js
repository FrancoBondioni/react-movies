const API = 'https://api.themoviedb.org/3';

export function get(path) {
    return fetch(API + path,
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2I3ODNjMmM0NDFjMzExOGUwZGQzY2E4ZWU5YmVmYSIsInN1YiI6IjY1OWQ4MDdjOGU4ZDMwMDIwMmRiOGQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qdyc3jaWrlU2ifKojWYBW-jWqKdmDUi9UD8nRDXKB88',
                "Content-Type":'application/json;character=utf8'
            },    
        }
    ).then(res =>  {
        if (res.status >= 200 && res.status <= 299) {
            return res.json()
          } else {
            return [];
          }
    })
}