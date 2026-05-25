import rehypeDocument from "rehype-document";
import { WUnifiedPlugin } from "wp-unified";
export default class WRehypeDocument extends WUnifiedPlugin {
    apply(processor, options) {
        if (options === undefined)
            return processor.use(rehypeDocument);
        else
            return processor.use(rehypeDocument, options);
    }
}
//# sourceMappingURL=index.js.map