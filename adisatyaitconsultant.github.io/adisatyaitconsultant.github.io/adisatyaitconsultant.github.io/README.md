# CEKLOK

## How To Install

clone with SSH

```bash
git clone ssh://git@git.aitc.co.id:8822/adisatya/ceklok/ceklok-page.git
```

### Update submodule

```bash
git submodule update --init --recursive 
git pull --recurse-submodules
```

## How To Run

build docker-composer.yml

Remember you need to wait for your site to build before you will be able to see your changes.

```bash
docker-compose up -d --build  
```

Access the link http://localhost:4000/ on the browser

## To deploy

Make sure you have manually tested and reviewed, then copy all the `_site` to `adisatyaitconsultant.github.io`

```bash
cp -R _site/ adisatyaitconsultant.github.io/
```

Then commit and push the changes

```bash
# push submodule
cd adisatyaitconsultant.github.io
git add -A
git commit -m "<change message>"
git push

# update the main repo
git add adisatyaitconsultant.github.io # or -A if want to include other changes
git commit -m "feat: update submodule"
git push
```

## access the production

we can check the production on `https://adisatyaitconsultant.github.io/` or `ceklok.com`
