#! /bin/bash

CURRENT_PUBLISHED_TARBALL="$(npm view vuesax-plus dist.tarball)"

echo $CURRENT_PUBLISHED_TARBALL

mkdir -p tmp

curl -o ./tmp/latest.tgz $CURRENT_PUBLISHED_TARBALL
tar zxvf ./tmp/latest.tgz -C ./tmp

diff -qr ./tmp/package ./dist/vuesax-plus | grep "Only" | cut -c 8- | sort > ./tmp/diff.txt
