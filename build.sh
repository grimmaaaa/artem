#!/usr/bin/env bash
# exit on error
set -o errexit

/opt/render/project/src/.venv/bin/python -m pip install --upgrade pip

poetry install

python -m ensurepip --default-pip
python manage.py collectstatic --no-input
python manage.py migrate
python manage.py createsuperuser --email chella05andrey@gmail.com --noinput