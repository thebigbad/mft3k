package : clean
					zip -r mft3k.xpi chrome/ defaults/ locale/ chrome.manifest install.rdf

clone : clean
					cp -R . ${DIR}${NAME} && \
          find ${DIR}${NAME}/ -not -regex '^\./\.git/.*' -type f | \
          xargs sed -i 's/mft3k/${NAME}/g'

clean :
					rm -f mft3k.xpi

