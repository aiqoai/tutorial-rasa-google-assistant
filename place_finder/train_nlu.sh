#!/bin/bash
python -m rasa_nlu.train -c config.yml --data data/nlu_data.md -o models --fixed_model_name nlu_model --project current --verbose
