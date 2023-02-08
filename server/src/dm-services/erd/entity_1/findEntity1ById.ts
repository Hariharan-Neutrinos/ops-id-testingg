// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { DmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class findEntity1ById {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'findEntity1ById';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new findEntity1ById(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_findEntity1ById_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: findEntity1ById');
    //appendnew_flow_findEntity1ById_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: findEntity1ById');

    this.app['post'](
      `${this.serviceBasePath}/dm/erd/entity_1/find-by-id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_0grguYfj00JSLkeH(bh, parentSpanInst);
          //appendnew_next_sd_nmqvnZatvHKHT4QW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nmqvnZatvHKHT4QW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_findEntity1ById_HttpIn
  }
  //   service flows_findEntity1ById

  //appendnew_flow_findEntity1ById_start

  async sd_0grguYfj00JSLkeH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0grguYfj00JSLkeH',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'entity_1');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0QdugsOAbiYiMI5Y(bh, parentSpanInst);
      //appendnew_next_sd_0grguYfj00JSLkeH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aSS7ecU70O4ga2kg',
        spanInst,
        'sd_0grguYfj00JSLkeH'
      );
    }
  }

  async sd_0QdugsOAbiYiMI5Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0QdugsOAbiYiMI5Y',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_MsveiTdT4FSAQYZr');
      bh.result = await dmUtilsInst.find(
        '_EN_0yr9cbpxpn',
        bh.filter,
        bh.offSet,
        bh.orderBy,
        bh.pageSize
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cleVO0zkW23MCOvg(bh, parentSpanInst);
      //appendnew_next_sd_0QdugsOAbiYiMI5Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0QdugsOAbiYiMI5Y',
        spanInst,
        'sd_0QdugsOAbiYiMI5Y'
      );
    }
  }

  async sd_cleVO0zkW23MCOvg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cleVO0zkW23MCOvg',
      parentSpanInst
    );
    try {
      if (bh.result) {
        if (Array.isArray(bh.result) && bh.result.length) {
          bh.result = bh.result[0];
        }
      } else {
        throw new Error('Not found.');
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_cleVO0zkW23MCOvg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cleVO0zkW23MCOvg',
        spanInst,
        'sd_cleVO0zkW23MCOvg'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tmJki1TNksFjEb2z');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    throw e;
  }
  //appendnew_flow_findEntity1ById_Catch
}
