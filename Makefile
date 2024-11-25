# Copyright 2024, Mattias Bengtsson <mattias.jc.bengtsson@gmail.com>
# SPDX-License-Identifier: CC-BY-SA-4.0

ARCHIVE=dist/github-nokeys.xpi
FILES=manifest.json nokeys.js

.PHONY: clean
all: $(ARCHIVE)

$(ARCHIVE): $(FILES) | dist/
	@echo o Creating $@ …
	@zip -r -FS $@ $^


clean:
	@echo o Cleaning up …
	@rm -rf dist

################################################################################

%/:
	@mkdir -p $@
