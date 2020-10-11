#!/usr/bin/env bash

CREDENTIALS_FILE=~/.aws/credentials

mkdir -p ~/.aws
echo "[sawka-pro]" >> ${CREDENTIALS_FILE}
echo "aws_access_key_id=${AWS_ACCESS_KEY_ID}" >> ${CREDENTIALS_FILE}
echo "aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" >> ${CREDENTIALS_FILE}
