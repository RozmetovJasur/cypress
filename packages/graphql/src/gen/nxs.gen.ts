/* eslint-disable */
/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { BaseContext } from "./../context/BaseContext"
import type { App } from "./../entities/App"
import type { Project } from "./../entities/Project"
import type { Query } from "./../entities/Query"
import type { TestingTypeInfo } from "./../entities/TestingTypeInfo"
import type { Wizard } from "./../entities/Wizard"
import type { WizardBundler } from "./../entities/WizardBundler"
import type { WizardFrontendFramework } from "./../entities/WizardFrontendFramework"
import type { WizardNpmPackage } from "./../entities/WizardNpmPackage"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddProjectInput: { // input type
    isCurrent: boolean; // Boolean!
    projectRoot: string; // String!
    testingType: string; // String!
  }
}

export interface NexusGenEnums {
  FrontendFramework: "cra" | "nextjs" | "nuxtjs" | "react" | "vue" | "vuecli"
  PluginsState: "error" | "initialized" | "initializing" | "uninitialized"
  SupportedBundlers: "vite" | "webpack"
  TestingTypeEnum: "component" | "e2e"
  WizardCodeLanguage: "js" | "ts"
  WizardNavigateDirection: "back" | "forward"
  WizardStep: "createConfig" | "installDependencies" | "selectFramework" | "setupComplete" | "welcome"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  JSON: any
}

export interface NexusGenObjects {
  App: App;
  Mutation: {};
  Project: Project;
  Query: Query;
  TestingTypeInfo: TestingTypeInfo;
  Wizard: Wizard;
  WizardBundler: WizardBundler;
  WizardFrontendFramework: WizardFrontendFramework;
  WizardNpmPackage: WizardNpmPackage;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  App: { // field return type
    activeProject: NexusGenRootTypes['Project'] | null; // Project
    isFirstOpen: boolean; // Boolean!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
  }
  Mutation: { // field return type
    addProject: NexusGenRootTypes['Project']; // Project!
    initializePlugins: NexusGenRootTypes['Project'] | null; // Project
    wizardInstallDependencies: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardNavigate: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardNavigateForward: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetBundler: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetFramework: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetManualInstall: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardSetTestingType: NexusGenRootTypes['Wizard'] | null; // Wizard
    wizardValidateManualInstall: NexusGenRootTypes['Wizard'] | null; // Wizard
  }
  Project: { // field return type
    id: string; // ID!
    isCurrent: boolean; // Boolean!
    isOpen: boolean; // Boolean!
    pluginsErrorMessage: string | null; // String
    pluginsState: NexusGenEnums['PluginsState'] | null; // PluginsState
    projectRoot: string; // String!
    title: string; // String!
  }
  Query: { // field return type
    app: NexusGenRootTypes['App']; // App!
    wizard: NexusGenRootTypes['Wizard'] | null; // Wizard
  }
  TestingTypeInfo: { // field return type
    description: string | null; // String
    id: NexusGenEnums['TestingTypeEnum']; // TestingTypeEnum!
    title: string | null; // String
  }
  Wizard: { // field return type
    allBundlers: NexusGenRootTypes['WizardBundler'][]; // [WizardBundler!]!
    bundler: NexusGenRootTypes['WizardBundler'] | null; // WizardBundler
    canNavigateForward: boolean; // Boolean!
    description: string | null; // String
    framework: NexusGenRootTypes['WizardFrontendFramework'] | null; // WizardFrontendFramework
    frameworks: NexusGenRootTypes['WizardFrontendFramework'][]; // [WizardFrontendFramework!]!
    isManualInstall: boolean; // Boolean!
    packagesToInstall: NexusGenRootTypes['WizardNpmPackage'][] | null; // [WizardNpmPackage!]
    sampleCode: string | null; // String
    step: NexusGenEnums['WizardStep']; // WizardStep!
    testingType: NexusGenEnums['TestingTypeEnum'] | null; // TestingTypeEnum
    testingTypes: NexusGenRootTypes['TestingTypeInfo'][] | null; // [TestingTypeInfo!]
    title: string | null; // String
  }
  WizardBundler: { // field return type
    id: NexusGenEnums['SupportedBundlers']; // SupportedBundlers!
    isSelected: boolean | null; // Boolean
    name: string; // String!
    package: string; // String!
  }
  WizardFrontendFramework: { // field return type
    id: NexusGenEnums['FrontendFramework']; // FrontendFramework!
    isSelected: boolean; // Boolean!
    name: string; // String!
    supportedBundlers: NexusGenRootTypes['WizardBundler'][]; // [WizardBundler!]!
  }
  WizardNpmPackage: { // field return type
    description: string; // String!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  App: { // field return type name
    activeProject: 'Project'
    isFirstOpen: 'Boolean'
    projects: 'Project'
  }
  Mutation: { // field return type name
    addProject: 'Project'
    initializePlugins: 'Project'
    wizardInstallDependencies: 'Wizard'
    wizardNavigate: 'Wizard'
    wizardNavigateForward: 'Wizard'
    wizardSetBundler: 'Wizard'
    wizardSetFramework: 'Wizard'
    wizardSetManualInstall: 'Wizard'
    wizardSetTestingType: 'Wizard'
    wizardValidateManualInstall: 'Wizard'
  }
  Project: { // field return type name
    id: 'ID'
    isCurrent: 'Boolean'
    isOpen: 'Boolean'
    pluginsErrorMessage: 'String'
    pluginsState: 'PluginsState'
    projectRoot: 'String'
    title: 'String'
  }
  Query: { // field return type name
    app: 'App'
    wizard: 'Wizard'
  }
  TestingTypeInfo: { // field return type name
    description: 'String'
    id: 'TestingTypeEnum'
    title: 'String'
  }
  Wizard: { // field return type name
    allBundlers: 'WizardBundler'
    bundler: 'WizardBundler'
    canNavigateForward: 'Boolean'
    description: 'String'
    framework: 'WizardFrontendFramework'
    frameworks: 'WizardFrontendFramework'
    isManualInstall: 'Boolean'
    packagesToInstall: 'WizardNpmPackage'
    sampleCode: 'String'
    step: 'WizardStep'
    testingType: 'TestingTypeEnum'
    testingTypes: 'TestingTypeInfo'
    title: 'String'
  }
  WizardBundler: { // field return type name
    id: 'SupportedBundlers'
    isSelected: 'Boolean'
    name: 'String'
    package: 'String'
  }
  WizardFrontendFramework: { // field return type name
    id: 'FrontendFramework'
    isSelected: 'Boolean'
    name: 'String'
    supportedBundlers: 'WizardBundler'
  }
  WizardNpmPackage: { // field return type name
    description: 'String'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addProject: { // args
      input: NexusGenInputs['AddProjectInput']; // AddProjectInput!
    }
    wizardNavigate: { // args
      direction: NexusGenEnums['WizardNavigateDirection']; // WizardNavigateDirection!
    }
    wizardSetBundler: { // args
      bundler: NexusGenEnums['SupportedBundlers']; // SupportedBundlers!
    }
    wizardSetFramework: { // args
      framework: NexusGenEnums['FrontendFramework']; // FrontendFramework!
    }
    wizardSetManualInstall: { // args
      isManual: boolean; // Boolean!
    }
    wizardSetTestingType: { // args
      type: NexusGenEnums['TestingTypeEnum']; // TestingTypeEnum!
    }
  }
  Wizard: {
    sampleCode: { // args
      lang: NexusGenEnums['WizardCodeLanguage']; // WizardCodeLanguage!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: BaseContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}