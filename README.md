## How To Install

clone with SSH
```
git clone ssh://git@git.aitc.co.id:8822/adisatya/ceklok/ceklok-page.git
git pull
```

checkout ke new branch `2-feat-skeleton-project`
```
git checkout 2-feat-skeleton-project
git pull
```

## How To Run

build docker-composer.yml

Remember you need to wait for your site to build before you will be able to see your changes.
```
docker-compose up -d --build  
```

run local server with same defaults listening on port 4000: