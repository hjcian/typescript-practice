clean:
	@rm -rf ./build

build: clean
	@tsc  -p tsconfig-cjs.json
	@tsc  -p tsconfig-mjs.json