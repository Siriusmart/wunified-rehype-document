import { UntypedProcessor, WUnifiedPlugin } from "wp-unified"
import rehypeDocument from "rehype-document"

export default class WRehypeDocument extends WUnifiedPlugin {
    apply(processor: UntypedProcessor, options: any): UntypedProcessor {
        if (options === undefined)
            processor = processor.use(rehypeDocument)
        else
            processor = processor.use(rehypeDocument, options)

        if (options.snapshot === true)
            /// tree is an hast.Root
            processor.apply(() => (tree: any) => {
                this.result.content = structuredClone(tree)
            })

        return processor;
    }
}
