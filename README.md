# JavaScript Project Boilerplate

## Usage

### Step 1: Clone Boilerplate and Open Folder

``` console
git clone https://github.com/JamesRobertHugginsNgo/javascript-project-boilerplate.git NEW-PROJECT-NAME
cd NEW-PROJECT-NAME
```

### Step 2: Replace Git Repository

``` console
rm -rf .git
git init
git branch -M main
git add .
git commit -m "Make initial commit"
git remote add origin https://github.com/JamesRobertHugginsNgo/NEW-PROJECT-NAME.git
git push -u origin main
```

### Step 3: Replace Readme File

``` console
rm README.md
echo -e '# NEW-PROJECT-NAME' >> README.MD
```

### Step 4: Replace Package.json

``` console
mv package.json package.old.json
npm init -y
```

Find and copy over the following fields/properties:
- scripts
- devDependencies

``` console
rm package.old.json
npm install
```

### Step 5: Commit Changes to the Git Repository

``` console
git add .
git commit -m "Update files"
```
