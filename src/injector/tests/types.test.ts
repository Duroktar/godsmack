import { IContainer } from "../interface/IContainer";
import { typeAssert } from "../../utils/AssertEqual";

declare class TestClass1 {
  bark(): string
}
declare class TestClass2 {
  meow(): string
}
declare class TestClass3 {
  caw(): string
}

type TestContainer1 = IContainer<TestClass1 | TestClass2>;

describe('Types', () => {
  it('typechecks', () => {

    const resolve: TestContainer1['resolve'] = () => void 0 as any;

    const r1 = resolve<TestClass1>();
    const r2 = resolve<TestClass2>();

    // @ts-expect-error
    const err1 = resolve<TestClass3>();

    typeAssert<typeof r1, TestClass1>(true);
    typeAssert<typeof r2, TestClass2>(true);

    typeAssert<typeof r1, TestClass2>(false);
    typeAssert<typeof r1, TestClass3>(false);
  })
})
